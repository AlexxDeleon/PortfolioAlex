export const skills = {
  "Programming Languages": [
    { name: "C#", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "Python", level: "Basic" },
    { name: "Swift", level: "Basic" }
  ],
  "Web Development": [
    { name: "HTML/CSS/Bootstrap", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Vue.js", level: "Basic" }
  ],
  "Databases": [
    { name: "SQL Server", level: "Advanced" },
    { name: "Azure SQL", level: "Intermediate" },
    { name: "MySQL", level: "Basic" },
    { name: "Firebase", level: "Basic" }
  ],
  "Tools": [
    { name: "Git/GitHub", level: "Intermediate" }
  ]
};

export const getLevelColor = (level) => {
  if (level === "Advanced") return "bg-green-500";
  if (level === "Intermediate") return "bg-blue-500";
  return "bg-gray-400";
};

export const getLevelWidth = (level) => {
  if (level === "Advanced") return "90%";
  if (level === "Intermediate") return "65%";
  return "40%";
};