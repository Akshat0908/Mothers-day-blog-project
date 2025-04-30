export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "A Mother's Unconditional Love",
    excerpt: "The story of how my mother's unwavering support shaped my life journey and career.",
    content: `A mother's love is truly one of life's most precious gifts. Growing up, I witnessed firsthand how my mother's unwavering support and guidance helped shape not just my career, but my entire approach to life. Through every challenge and triumph, her wisdom and encouragement were my constant companions.

    I remember vividly the day I decided to pursue my dreams of becoming a writer. While others expressed doubt, my mother stood firmly beside me, her faith in my abilities never wavering. She would stay up late helping me edit my early works, offering constructive feedback while maintaining that delicate balance between honesty and encouragement.

    Her influence extended far beyond just career guidance. She taught me the importance of perseverance, empathy, and maintaining one's integrity even in the face of adversity. These lessons have become the cornerstone of my personal and professional life.

    Today, as I navigate my own path, I carry with me the countless lessons she imparted. Her voice remains a guiding light, reminding me to stay true to myself while pursuing excellence in everything I do.`,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Stories",
    readingTime: "5 min read",
    image: "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg"
  },
  {
    id: 2,
    title: "Cooking Memories with Mom",
    excerpt: "Cherished moments spent in the kitchen learning family recipes passed down through generations.",
    content: `The kitchen has always been the heart of our home, a place where memories are made and traditions are passed down through generations. Some of my most treasured childhood memories revolve around standing beside my mother at the counter, learning the secret ingredients and techniques that made her cooking so special.

    Every Sunday morning, we would wake up early to prepare our family's traditional recipes. The aroma of freshly baked bread and simmering sauces would fill the house, drawing everyone to the kitchen. My mother would patiently explain each step, sharing not just recipes, but stories of her own childhood and the women who taught her these culinary traditions.

    These kitchen sessions were about more than just cooking – they were lessons in love, patience, and the importance of maintaining family traditions. Through measuring, mixing, and tasting, I learned valuable life lessons that I carry with me to this day.

    Now, as I prepare these same recipes in my own kitchen, I feel connected to my mother and all the generations of strong women who came before us. Each dish carries with it a story, a memory, and a piece of our family's heritage.`,
    author: "Emily Chen",
    date: "March 14, 2024",
    category: "Stories",
    readingTime: "4 min read",
    image: "https://images.pexels.com/photos/4149019/pexels-photo-4149019.jpeg"
  },
  {
    id: 3,
    title: "The Working Mom's Guide to Balance",
    excerpt: "Tips and insights on managing career and motherhood from experienced working moms.",
    content: `Finding the perfect balance between career and motherhood is one of the most challenging aspects of being a working mom. Through years of experience and countless conversations with other working mothers, I've learned that while perfect balance might be a myth, creating a harmonious blend of work and family life is absolutely achievable.

    The key lies in being present and intentional with your time. When you're at work, focus on your professional responsibilities, and when you're with your children, give them your undivided attention. This mindful approach helps reduce the guilt that many working mothers experience and allows you to make the most of both roles.

    Organization and planning are crucial. Meal prep on weekends, maintaining a family calendar, and establishing consistent routines can help streamline daily responsibilities. Don't be afraid to delegate tasks and accept help when offered – it takes a village, and there's no shame in building and relying on your support system.

    Remember to take care of yourself too. Self-care isn't selfish; it's necessary for being the best mother and professional you can be. Whether it's a morning workout, reading a book, or having coffee with friends, make time for activities that recharge your batteries.`,
    author: "Maria Rodriguez",
    date: "March 13, 2024",
    category: "Health",
    readingTime: "6 min read",
    image: "https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg"
  },
  {
    id: 4,
    title: "Mother's Day Gift Guide: From the Heart",
    excerpt: "Thoughtful and meaningful gift ideas to show your mother how much you care.",
    content: `Finding the perfect Mother's Day gift goes beyond material value – it's about showing appreciation and love for the woman who has given so much. The most meaningful gifts often come from the heart and demonstrate thoughtfulness and understanding of your mother's interests and values.

    Consider creating a memory book filled with family photos and handwritten notes from loved ones. This personal touch allows you to share cherished memories and express gratitude in a way that will be treasured for years to come.

    For the mom who loves quality time, plan a special day of activities tailored to her interests. Whether it's a cooking class, garden tour, or spa day, the gift of shared experiences creates lasting memories.

    Remember, sometimes the simplest gestures mean the most. A heartfelt letter expressing your love and appreciation, or spending time helping with a project she's been wanting to complete, can be more valuable than any store-bought gift.`,
    author: "Lisa Thompson",
    date: "March 12, 2024",
    category: "Inspiration",
    readingTime: "4 min read",
    image: "https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg"
  }
];