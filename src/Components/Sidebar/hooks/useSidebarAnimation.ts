const sidebarVariant = {
  open: {
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    width: '0.08%',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuModulesVariant = {
  open: {
    y: 0,
    opacity: 1,
    visibility: 'visible',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    visibility: 'hidden',
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const useSidebarAnimation = () => {
  return {
    sidebarAnimation: sidebarVariant,
    menuModuleAnimaton: menuModulesVariant,
  };
};
