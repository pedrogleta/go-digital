import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import React from "react";

export interface IModalProps extends React.HTMLProps<HTMLDivElement> {
  "data-cy"?: string;
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
    className,
    confirmButtonText = "Confirm",
    confirmDestructive,
    disableCancelButton = false,
    disableConfirmButton = false,
    modalWrapperClass,
    contentWrapperClass,
    onCancel,
    onConfirm,
    open = false,
    positioning,
    showFooterButtons = true,
    title,
    titleWarn,
    titleCaution,
  } = props;

  const transitionDurationStart = 0.2;
  const transitionDurationEnd = 0.2;

  return (
    <AnimatePresence>
      {open && (
        <div
          className={cn(
            "fixed inset-0 z-30 flex items-start justify-between p-4 pt-20 md:items-center md:pt-0",
            className
          )}
        >
          {/* Modal Background */}
          <motion.div
            animate={{ opacity: transitionDurationStart }}
            transition={{ ease: "easeIn", duration: transitionDurationStart }}
            className="absolute inset-0 bg-gray-600 opacity-0"
            onClick={onCancel}
            exit={{
              opacity: 0,
              transition: { duration: transitionDurationEnd },
            }}
          >
            &nbsp;
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
            className={cn(
              `w-full z-50 pt-1 overflow-y-auto bg-white rounded
              shadow-xl shadow-gray-300 max-h-[calc(100%_-_4rem)] lg:max-h-[calc(100%_-_10rem)]`,
              modalWrapperClass,
              positioning || "relative mx-auto"
            )}
            data-cy={props["data-cy"]}
          >
            {/* Modal Header */}
            {title && (
              <div className="flex items-center justify-between px-4 py-3 md:px-6 border-b">
                <div className="relative flex items-center space-x-2">
                  <h2 className="text-base font-semibold text-gray-800">
                    {title}
                  </h2>
                </div>
              </div>
            )}
            {/* /Modal Header */}

            {/* Modal Content */}
            <div
              className={cn(
                "relative h-full px-4 py-4 border-gray-200 md:py-4 md:px-6",
                contentWrapperClass
              )}
            >
              {children}
            </div>
            {/* /Modal Content */}

            {/* Modal Footer */}
            {showFooterButtons && (
              <div className="flex justify-end pt-3 mt-6 space-x-3 border-t px-4 py-3 md:px-6">
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
              </div>
            )}
            {/* /Modal Footer */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
