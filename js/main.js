// Prompt Gallery Main JavaScript

class PromptGallery {
    constructor() {
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.favorites = this.loadFavorites();
        this.showingFavorites = false;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderPrompts();
        this.updateStats();
        this.updateFavoritesCount();
    }

    bindEvents() {
        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setCategory(e.target.dataset.category);
            });
        });

        // Search input
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.setSearchQuery(e.target.value);
        });

        // Favorites toggle
        document.getElementById('favoritesToggle').addEventListener('click', () => {
            this.toggleFavorites();
        });
    }

    setCategory(category) {
        this.currentCategory = category;
        this.showingFavorites = false;
        
        // Update UI
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-primary', 'hover:text-white');
        });
        
        document.querySelector(`[data-category="${category}"]`).classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-primary', 'hover:text-white');
        document.querySelector(`[data-category="${category}"]`).classList.add('bg-primary', 'text-white');
        
        // Update favorites toggle
        document.getElementById('favoritesToggle').classList.remove('text-primary', 'bg-primary-light');
        document.getElementById('favoritesToggle').classList.add('text-gray-500');
        
        this.renderPrompts();
        this.updateStats();
    }

    setSearchQuery(query) {
        this.searchQuery = query.toLowerCase();
        this.renderPrompts();
        this.updateStats();
    }

    toggleFavorites() {
        this.showingFavorites = !this.showingFavorites;
        
        // Update UI
        const favBtn = document.getElementById('favoritesToggle');
        if (this.showingFavorites) {
            favBtn.classList.add('text-primary', 'bg-primary-light');
            favBtn.classList.remove('text-gray-500');
            // Reset category selection visual
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-primary', 'hover:text-white');
            });
        } else {
            favBtn.classList.remove('text-primary', 'bg-primary-light');
            favBtn.classList.add('text-gray-500');
            // Restore category selection
            this.setCategory(this.currentCategory);
        }
        
        this.renderPrompts();
        this.updateStats();
    }

    getFilteredPrompts() {
        let prompts = promptsData;

        // Filter by favorites if active
        if (this.showingFavorites) {
            prompts = prompts.filter(prompt => this.favorites.includes(prompt.id));
        }
        // Filter by category
        else if (this.currentCategory !== 'all') {
            prompts = prompts.filter(prompt => prompt.category === this.currentCategory);
        }

        // Filter by search query
        if (this.searchQuery) {
            prompts = prompts.filter(prompt => {
                return prompt.prompt.toLowerCase().includes(this.searchQuery) ||
                       prompt.category.toLowerCase().includes(this.searchQuery) ||
                       prompt.tags.some(tag => tag.toLowerCase().includes(this.searchQuery));
            });
        }

        return prompts;
    }

    renderPrompts() {
        const grid = document.getElementById('promptsGrid');
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        
        // Show loading
        loadingState.classList.remove('hidden');
        grid.classList.add('opacity-50');
        
        setTimeout(() => {
            const filteredPrompts = this.getFilteredPrompts();
            
            if (filteredPrompts.length === 0) {
                grid.innerHTML = '';
                grid.classList.add('hidden');
                loadingState.classList.add('hidden');
                emptyState.classList.remove('hidden');
                return;
            }

            grid.classList.remove('hidden');
            emptyState.classList.add('hidden');
            
            grid.innerHTML = filteredPrompts.map(prompt => this.createPromptCard(prompt)).join('');
            
            // Bind copy buttons
            grid.querySelectorAll('.copy-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.copyToClipboard(btn.dataset.prompt);
                });
            });

            // Bind favorite buttons
            grid.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleFavorite(btn.dataset.promptId);
                });
            });

            loadingState.classList.add('hidden');
            grid.classList.remove('opacity-50');
        }, 300);
    }

    createPromptCard(prompt) {
        const isFavorite = this.favorites.includes(prompt.id);
        
        return `
            <div class="bg-white rounded-xl shadow-md card-hover overflow-hidden">
                <!-- Image -->
                <div class="relative h-48 overflow-hidden">
                    <img src="${prompt.image}" 
                         alt="Prompt preview" 
                         class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                         onerror="this.src='https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&h=300&fit=crop'">
                    
                    <!-- Category badge -->
                    <div class="absolute top-3 left-3">
                        <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full capitalize">
                            ${prompt.category}
                        </span>
                    </div>
                    
                    <!-- Favorite button -->
                    <button class="favorite-btn absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200" 
                            data-prompt-id="${prompt.id}">
                        <i class="fas fa-heart ${isFavorite ? 'text-red-500' : 'text-gray-400'}"></i>
                    </button>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1 mb-3">
                        ${prompt.tags.slice(0, 3).map(tag => 
                            `<span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-md">#${tag}</span>`
                        ).join('')}
                    </div>
                    
                    <!-- Prompt text -->
                    <p class="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                        ${prompt.prompt}
                    </p>
                    
                    <!-- Copy button -->
                    <button class="copy-btn w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2" 
                            data-prompt="${prompt.prompt}">
                        <i class="fas fa-copy text-sm"></i>
                        <span>Copy Prompt</span>
                    </button>
                </div>
            </div>
        `;
    }

    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showCopySuccess();
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showCopySuccess();
        }
    }

    showCopySuccess() {
        const toast = document.getElementById('copyToast');
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000);
    }

    toggleFavorite(promptId) {
        if (this.favorites.includes(promptId)) {
            this.favorites = this.favorites.filter(id => id !== promptId);
        } else {
            this.favorites.push(promptId);
        }
        
        this.saveFavorites();
        this.updateFavoritesCount();
        
        // Re-render if showing favorites
        if (this.showingFavorites) {
            this.renderPrompts();
        } else {
            // Just update the heart icon
            const heartIcon = document.querySelector(`[data-prompt-id="${promptId}"] i`);
            if (heartIcon) {
                heartIcon.classList.toggle('text-red-500');
                heartIcon.classList.toggle('text-gray-400');
            }
        }
    }

    loadFavorites() {
        const saved = localStorage.getItem('promptGalleryFavorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('promptGalleryFavorites', JSON.stringify(this.favorites));
    }

    updateFavoritesCount() {
        const countElement = document.getElementById('favoritesCount');
        const count = this.favorites.length;
        
        if (count > 0) {
            countElement.textContent = count;
            countElement.classList.remove('hidden');
        } else {
            countElement.classList.add('hidden');
        }
    }

    updateStats() {
        const filteredPrompts = this.getFilteredPrompts();
        
        document.getElementById('totalPrompts').textContent = filteredPrompts.length;
        
        let categoryText = 'All';
        if (this.showingFavorites) {
            categoryText = 'Favorites';
        } else if (this.currentCategory !== 'all') {
            categoryText = this.currentCategory.charAt(0).toUpperCase() + this.currentCategory.slice(1);
        }
        
        document.getElementById('activeCategory').textContent = categoryText;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new PromptGallery();
});

// Add CSS for line-clamp utility
const style = document.createElement('style');
style.textContent = `
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
document.head.appendChild(style);