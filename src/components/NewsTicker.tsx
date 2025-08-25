import { Megaphone } from "lucide-react";

const NewsTicker = () => {
  const news = [
    "🎉 New AI Fundamentals Course launching next week!",
    "📚 Limited time offer: 50% off on Machine Learning Bootcamp",
    "🏆 Join our upcoming webinar on 'Future of AI in Education'",
    "💡 Student showcase: Amazing projects from our recent graduates",
    "🚀 New certification program in Data Science now available"
  ];

  return (
    <div className="bg-gradient-primary text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center px-4 whitespace-nowrap">
          <Megaphone size={16} className="mr-2" />
          <span className="font-semibold">Latest News:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="news-ticker">
            {news.map((item, index) => (
              <span key={index} className="mx-8 font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;