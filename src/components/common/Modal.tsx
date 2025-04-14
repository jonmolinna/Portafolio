import React, { ReactNode } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
};

const Modal: React.FC<Props> = ({ isOpen, setIsOpen, children }) => {
  return (
    <AnimatePresence>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="fixed inset-0 flex w-screen items-center justify-center"
        >
          <DialogPanel className="max-w-md border bg-white rounded-lg">
            {children}
          </DialogPanel>
        </motion.div>
      </Dialog>
    </AnimatePresence>
  );
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export default Modal;
