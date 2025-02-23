import {
  Code2,
  MonitorSmartphone,
  Database,
  Brain,
  DollarSign,
} from "lucide-react";

export const courses = [
  {
    category: "Formação completa",
    items: [
      {
        title: "Treinamento Code Start",
        description:
          "Lógica de programação, HTML, CSS, JavaScript, Bootstrap, React, Node, etc...",
        duration: "200h",
        icon: <MonitorSmartphone className="w-6 h-6" />,
        level: "Iniciante",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
        rating: 4.9,
        lessons: 168,
        isComingSoon: false,
      },
    ],
  },
  {
    category: "Carreira",
    items: [
      {
        title: "Dev Cash",
        description: "Aprenda a monetizar suas habilidades como programador",
        duration: "25h",
        icon: <DollarSign className="w-6 h-6" />,
        level: "Todos os níveis",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxPmWwIF6CKfD5LWe5UbXnpVPL1H4ubtlEg&s",
        rating: 5.0,
        lessons: 20,
        isComingSoon: false,
      },
    ],
  },
  {
    category: "Carreira",
    items: [
      {
        title: "Currículo de Elite",
        description:
          "Tenha em mãos um currículo validado para você só preencher seus dados",
        duration: "1h",
        icon: <Database className="w-6 h-6" />,
        level: "Todos os níveis",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo82cHS7cTXD08wabmpuUvmkj1xBuV5DbLwg&s",
        rating: 4.8,
        lessons: 1,
        isComingSoon: false,
      },
    ],
  },
  {
    category: "Inteligência Artificial",
    items: [
      {
        title: "Fundamentos de IA",
        description: "Conceitos básicos, tipos de IA e aplicações práticas",
        duration: "30h",
        icon: <Brain className="w-6 h-6" />,
        level: "Iniciante",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
        rating: 5.0,
        lessons: 25,
        isComingSoon: true,
      },
    ],
  },

  {
    category: "Front-end",
    items: [
      {
        title: "React",
        description: "Fundamentos, Hooks, Context API ",
        duration: "35h",
        icon: <Code2 className="w-6 h-6" />,
        level: "intermediário",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070",
        rating: 4.9,
        lessons: 28,
        isComingSoon: true,
      },
      {
        title: "React Avançado",
        description: " .",
        duration: "35h",
        icon: <Code2 className="w-6 h-6" />,
        level: "Avançado",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070",
        rating: 4.9,
        lessons: 28,
        isComingSoon: true,
      },
    ],
  },
];
