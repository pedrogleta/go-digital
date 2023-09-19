import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import React from "react";
import {
  Container,
  ModalBackground,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./styles";

export interface IModalProps extends React.HTMLProps<HTMLDivElement> {
  cancelButtonText?: string;
  children?: React.ReactNode | React.ReactNode[];
  confirmButtonText?: string;
  confirmDestructive?: boolean;
  disableCancelButton?: boolean;
  disableConfirmButton?: boolean;
  modalWrapperClass?: string;
  contentWrapperClass?: string;
  onCancel: () => void;
  onConfirm?: () => void;
  open?: boolean;
  positioning?: string;
  showFooterButtons?: boolean;
  title?: string;
  titleWarn?: boolean;
  titleCaution?: boolean;
}

export const Modal = (props: IModalProps) => {
  const {
    cancelButtonText = "Cancel",
    children,
    confirmButtonText = "Confirm",
    disableCancelButton = false,
    disableConfirmButton = false,
    onCancel,
    onConfirm,
    open = false,
    showFooterButtons = false,
    title,
  } = props;

  const transitionDurationStart = 0.2;
  const transitionDurationEnd = 0.2;

  return (
    <AnimatePresence>
      {open && (
        <Container>
          {/* Modal Background */}
          <motion.div
            animate={{ opacity: transitionDurationStart }}
            transition={{ ease: "easeIn", duration: transitionDurationStart }}
            onClick={onCancel}
            exit={{
              opacity: 0,
              transition: { duration: transitionDurationEnd },
            }}
          >
            <ModalBackground>&nbsp;</ModalBackground>
          </motion.div>
          {/* /Modal Background */}

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              default: {
                duration: transitionDurationStart,
                ease: "easeInOut",
              },
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: transitionDurationEnd },
            }}
          >
            {/* Modal Header */}
            <ModalHeader>
              {title && (
                <div>
                  <div>
                    <h2>{title}</h2>
                  </div>
                </div>
              )}
            </ModalHeader>
            {/* /Modal Header */}

            {/* Modal Content */}
            <ModalContent>{children}</ModalContent>

            {/* /Modal Content */}

            {/* Modal Footer */}
            {showFooterButtons && (
              <ModalFooter>
                <button
                  disabled={disableCancelButton}
                  onClick={onCancel}
                  data-cy="modalCancelButton"
                >
                  <span>{cancelButtonText}</span>
                </button>
                <button
                  disabled={disableConfirmButton}
                  onClick={onConfirm}
                  data-cy="modalConfirmButton"
                >
                  <span>{confirmButtonText}</span>
                </button>
              </ModalFooter>
            )}
            {/* /Modal Footer */}
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Modal;
