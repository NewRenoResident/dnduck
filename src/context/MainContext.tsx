import { createContext, ReactElement, useContext, useState } from "react";

const NotificationContext = createContext({
  active: "",
  setActive: () => {},
});

const NotificationProvider = ({ children }: { children: ReactElement }) => {
  const [active, setActive] = useState("");

  return (
    <NotificationContext.Provider value={{ active, setActive }}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  return useContext(NotificationContext);
};

export { NotificationProvider, useNotification };
