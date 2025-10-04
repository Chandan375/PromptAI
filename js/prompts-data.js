// Prompt Gallery Data
const promptsData = [
    {
        id: "1",
        category: "women",
        image: "https://images.unsplash.com/photo-1494790108755-2616c943f46c?w=400&h=300&fit=crop&crop=face",
        prompt: "Create a soft, sunlit portrait of a woman wearing a yellow saree with sunflowers in the background. Natural lighting, warm tones, peaceful expression, traditional Indian attire, golden hour photography.",
        tags: ["portrait", "traditional", "sunlit", "saree", "sunflowers"]
    },
    {
        id: "2",
        category: "men",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
        prompt: "Cinematic photo of a man holding a burning newspaper, dramatic lighting, smoke effects, intense expression, film noir style, black and white photography with selective color on the flame.",
        tags: ["cinematic", "dramatic", "noir", "newspaper", "flame"]
    },
    {
        id: "3",
        category: "couple",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
        prompt: "Capture a romantic, dreamy photo of a couple during golden hour. Soft bokeh background, warm lighting, intimate pose, wedding photography style, natural emotions, outdoor setting.",
        tags: ["romantic", "golden hour", "wedding", "intimate", "bokeh"]
    },
    {
        id: "4",
        category: "kids",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&crop=face",
        prompt: "Retro-inspired portrait of a little boy in a vintage suit holding colorful flowers. Classic photography style, sepia tones, formal pose, nostalgic atmosphere, studio lighting.",
        tags: ["retro", "vintage", "formal", "flowers", "nostalgic"]
    },
    {
        id: "5",
        category: "women",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
        prompt: "Ethereal portrait of a woman with flowing hair in a bohemian dress, surrounded by wildflowers. Dreamy atmosphere, soft focus, natural lighting, free-spirited vibe, outdoor meadow setting.",
        tags: ["bohemian", "ethereal", "wildflowers", "dreamy", "natural"]
    },
    {
        id: "6",
        category: "men",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
        prompt: "Moody black and white portrait of a bearded man in urban setting. Strong shadows, confident expression, street photography style, architectural background, dramatic contrast.",
        tags: ["moody", "urban", "beard", "shadows", "street"]
    },
    {
        id: "7",
        category: "couple",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
        prompt: "Candid polaroid-style photo of a couple laughing together in a vintage coffee shop. Warm amber tones, genuine emotions, retro filter, cozy atmosphere, intimate moment capture.",
        tags: ["polaroid", "candid", "coffee shop", "retro", "cozy"]
    },
    {
        id: "8",
        category: "kids",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=face",
        prompt: "Artistic portrait of a toddler with paint-covered hands creating colorful art. Vibrant colors, creative chaos, joyful expression, natural lighting, documentary photography style.",
        tags: ["artistic", "toddler", "paint", "creative", "joyful"]
    },
    {
        id: "9",
        category: "women",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop&crop=face",
        prompt: "Elegant fashion portrait of a woman in traditional kimono during cherry blossom season. Soft pink petals, serene expression, cultural photography, springtime mood, Japanese aesthetics.",
        tags: ["elegant", "kimono", "cherry blossom", "traditional", "japanese"]
    },
    {
        id: "10",
        category: "men",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
        prompt: "Vintage-inspired portrait of a man in leather jacket with classic motorcycle. Retro styling, rebellion theme, golden hour lighting, adventure spirit, timeless cool aesthetic.",
        tags: ["vintage", "leather jacket", "motorcycle", "rebellion", "adventure"]
    },
    {
        id: "11",
        category: "couple",
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=300&fit=crop",
        prompt: "Silhouette of a couple dancing at sunset on a beach. Romantic atmosphere, ocean waves, dramatic sky, backlit photography, love story theme, peaceful moment.",
        tags: ["silhouette", "dancing", "beach", "sunset", "romantic"]
    },
    {
        id: "12",
        category: "kids",
        image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=300&fit=crop&crop=face",
        prompt: "Whimsical portrait of children playing in autumn leaves. Warm fall colors, natural joy, candid expressions, outdoor play, seasonal photography, childhood innocence theme.",
        tags: ["whimsical", "autumn", "leaves", "children", "seasonal"]
    },
    {
        id: "13",
        category: "women",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop&crop=face",
        prompt: "Professional headshot of a confident businesswoman in modern office setting. Clean lighting, corporate attire, professional demeanor, contemporary workspace, success theme.",
        tags: ["professional", "businesswoman", "office", "corporate", "confidence"]
    },
    {
        id: "14",
        category: "men",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face",
        prompt: "Rugged outdoor portrait of an adventurer with mountain backdrop. Natural elements, hiking gear, determined expression, wilderness photography, explorer spirit theme.",
        tags: ["rugged", "adventurer", "mountain", "outdoor", "wilderness"]
    },
    {
        id: "15",
        category: "couple",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
        prompt: "Cozy winter portrait of a couple by fireplace with warm blankets. Indoor comfort, seasonal mood, intimate lighting, holiday atmosphere, togetherness theme.",
        tags: ["cozy", "winter", "fireplace", "intimate", "holiday"]
    },
    {
        id: "16",
        category: "kids",
        image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=300&fit=crop&crop=face",
        prompt: "Magical portrait of a child blowing soap bubbles in garden setting. Playful mood, natural wonder, soft lighting, childhood magic, outdoor fun theme.",
        tags: ["magical", "bubbles", "garden", "playful", "wonder"]
    }
];

// Category configuration
const categories = {
    all: {
        name: "All Prompts",
        description: "Browse our complete collection of AI prompts"
    },
    men: {
        name: "Men",
        description: "Masculine portraits and character studies"
    },
    women: {
        name: "Women",
        description: "Feminine portraits and lifestyle photography"
    },
    couple: {
        name: "Couple",
        description: "Romantic and relationship photography"
    },
    kids: {
        name: "Kids",
        description: "Children and family photography"
    }
};

// Export data for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { promptsData, categories };
}