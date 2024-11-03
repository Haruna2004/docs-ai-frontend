"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Input from "./Input";
import Answer from "./Answer";
import ActionButtons from "./ActionButtons";
import Sources from "./Sources";
import Header from "./Header";
import { ExampleQuestions } from "./Others";

type Props = object;

export default function AIModal({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Modal
        size="4xl"
        isOpen={true}
        onClose={onClose}
        backdrop="opaque"
        scrollBehavior="inside"
        // placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-2 bg-gray-50">
                <Header />
              </ModalHeader>

              <ModalBody className="flex flex-col gap-3 text-sm relative pt-0 font-sans">
                <Input />
                <ExampleQuestions />
                <Answer />
                <ActionButtons />
                <Sources />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
