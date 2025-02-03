import algorithm_visualizer_img from "../../assets/algorithm_visualizer.PNG";
import cube_timer_img from "../../assets/cube_timer.PNG";
import employee_attrition_img from "../../assets/employee_attrition.PNG";
import platformer_img from "../../assets/2d_platformer.PNG";
import treasure_hunt_img from "../../assets/treasure_hunt.png";
import sap_img from "../../assets/SAP_Datathon.png";
import byte_img from "../../assets/Byte_Datathon.png";

export const projects_data = [
  {
    id: 1,
    title: "Algorithm Visualizer",
    skills:
      "Swift, SwiftUI, Algorithms, Asynchronous Programming, GUI Development, Git, Documentation",
    description:
      "A user-friendly, multi-state iOS application that showcases how BFS and DFS are executed on mazes designed by the user or randomly generated. There is an option of generating the solution cell by cell, and an option of viewing the solution immediately.",
    img_: algorithm_visualizer_img,
    link: "https://github.com/AllanWang1/Algorithm-Visualizer",
    buttonText: "View Details",
  },
  {
    id: 2,
    title: "Employee Attrition Analysis",
    skills: "R, Logistic Regression, Inference, EDA, Predictor Selection",
    description:
      "As a team of 4, we analyzed an employee attrition dataset. We picked explanatory variables from forward selection, and interpreted the association between them and employee attrition.",
    img_: employee_attrition_img,
    link: "/Portfolio/employeeAttrition.html",
    buttonText: "View Report",
  },
  {
    id: 3,
    title: "2D Platformer Game",
    skills: "C++, SFML, Type Hierarchy, CMake, Collision Testing",
    description:
      "A multi-state 2D platformer game that records health and has dynamic difficulty. Player loses health when running into obstacles.",
    img_: platformer_img,
    link: "https://github.com/AllanWang1/IZombie",
    buttonText: "View Details",
  },
  {
    id: 4,
    title: "SAP Customer Churn Datathon",
    skills: "R, Prediction, KNN, Random Forest, Logistic Regression, Case Study",
    description: "Together with a partner, we used machine learning algorithms to predict customer churn. We further provided business insights on how to reduce customer churn.",
    img_: sap_img,
    link: "/Portfolio/SAPDatathon.html",
    buttonText: "View Jupyter Notebook",
  },
  {
    id: 5,
    title: "BYTE Clothing Store Datathon",
    skills: "Python (Pandas, Matplotlib), Excel, EDA, Data Visualization, Business Strategy, Case Study",
    description: "Analyzed a clothing store sales dataset as a team of 4. EDA was completed thoroughly, and developed a business plan for the clothing store to maximize their profit based on the data, identified the associated risks, and proposed mitigation strategies.",
    img_: byte_img,
    link: "/",
    buttonText: "",
  },
  {
    id: 6,
    title: "BFS Treasure Hunt",
    skills: "C++, Data Structures (Stack, Queue, Deque, Graph), Algorithms",
    description:
      "Implemented Stack, Queue, and Deque manually, and utilized them within the maze decoder. I encoded maps onto the base images, and implemented BFS on the encoded image to find the longest path of the treasure map.",
    img_: treasure_hunt_img,
    link: "/",
    buttonText: "",
  },
  {
    id: 7,
    title: "Rubik's Cube Timer",
    skills:
      "Java, JUnit Testing, Java Swing, GUI Development, Git, Documentation",
    description:
      "A cross-platform desktop timer application for speed-cubers. Comments and edits can be made to previous solves recorded in the session easily.",
    img_: cube_timer_img,
    link: "https://github.com/AllanWang1/Cube-Timer-Project",
    buttonText: "View Details",
  },
];
