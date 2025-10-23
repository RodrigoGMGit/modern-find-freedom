import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Los matrimonios forzados no son cosa del pasado",
    excerpt: "En este blog, examinaremos de cerca la problemática de los matrimonios forzados, una práctica atroz que ha perdurado a través del tiempo.",
    date: "mayo 29, 2023",
    author: "staff",
    tag: "Violencia de Género",
    image: "https://findelaesclavitud.org/wp-content/uploads/2023/05/matrimonio-forzado-1024x595.jpg",
  },
  {
    id: 2,
    title: "Cómo saber si estoy siendo víctima de violencia",
    excerpt: "En este blog analizaremos cómo las relaciones de pareja pueden llegar a convertirse en dañinas y violentas.",
    date: "abril 14, 2023",
    author: "staff",
    tag: "Violencia de Género",
    image: "https://findelaesclavitud.org/wp-content/uploads/2023/04/pexels-anete-lusina-5723192R-1024x683.jpg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <img 
                src="https://findelaesclavitud.org/wp-content/uploads/2023/05/BLOGr_r-removebg-150x150.png"
                alt="Blog"
                className="w-24 h-24"
              />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">BLOG</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-card transition-shadow duration-300 group">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {post.tag}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>By {post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
