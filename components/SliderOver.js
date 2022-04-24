import { XIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
  FocusScope,
  OverlayContainer,
  useDialog,
  useModal,
  useOverlay,
} from "react-aria";

function SlideOverContent(props) {
  const { onClose, children, title } = props;

  const ref = React.useRef();
  const { overlayProps } = useOverlay(props, ref);
  const { modalProps } = useModal(props, ref);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
        <motion.section
          className="absolute inset-y-0 right-0 flex max-w-full pl-10"
          aria-labelledby="slide-over-heading"
          ref={ref}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <FocusScope contain restoreFocus autoFocus>
            <div className="relative w-screen max-w-md">
              <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                <button
                  onClick={onClose}
                  className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close panel</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                <div className="px-4 sm:px-6">
                  <h2
                    id="slide-over-heading"
                    className="text-lg font-medium text-gray-900"
                    {...titleProps}
                  >
                    {title}
                  </h2>
                </div>
                <div className="relative flex-1 px-4 mt-6 sm:px-6">
                  {children}
                </div>
              </div>
            </div>
          </FocusScope>
        </motion.section>
      </div>
    </div>
  );
}

function SlideOver({ isOpen, onClose, title, children }) {
  return (
    <OverlayContainer>
      <AnimatePresence>
        {isOpen && (
          <SlideOverContent
            title={title}
            onClose={onClose}
            isOpen={isOpen}
            isDismissable
          >
            {children}
          </SlideOverContent>
        )}
      </AnimatePresence>
    </OverlayContainer>
  );
}

export default SlideOver;
