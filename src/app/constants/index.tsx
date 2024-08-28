interface NavLink {
    label: string;
    type: 'single' | 'group';
    path?: string;
    target?: '_blank';
    children?: NavLink[];
  }
  
  const navLinks: NavLink[] = [
    {
      label: "Home",
      type: "single",
      path: "/"
    },
    {
      label: "Who we are",
      type: "single",
      path: "/about"
    },
    {
      label: "What we do",
      type: "group",
      children: [
        { label: "Healthcare", type: "single", path: "/healthcare" },
        { label: "Education", type: "single", path: "/education" },
        { label: "Livelihood", type: "single", path: "/404" },
        { label: "SDGs", type: "single", path: "/#sdgsec" }
      ]
    },
    {
      label: "Resources",
      type: "group",
      children: [
        { label: "Insights", type: "single", path: "/blogs" },
        { label: "Newsroom", type: "single", path: "/media" }
      ]
    },
    {
      label: "iECHO",
      type: "single",
      path: "https://iecho.org/home",
      target: "_blank"
    },
    {
      label: "Get Involved",
      type: "group",
      children: [
        { label: "Partner with us", type: "single", path: "/partner" },
        { label: "Careers", type: "single", path: "/careers" },
        { label: "Contact", type: "single", path: "/contact" }
      ]
    }
  ];


  export default navLinks

