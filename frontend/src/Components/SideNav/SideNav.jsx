import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiCompass,
  FiStar,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { AiFillContainer } from "react-icons/ai";

import logo from "../../assets/logo.png";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "User Add", icon: FiUsers },
  { name: "User List", icon: FiMenu },
  { name: "Notifications", icon: AiFillContainer },
  { name: "Settings", icon: FiSettings },
];

export default function Sidenav({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="#edf2f6">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.800")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.100", "gray.800")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      top="0"
      left="0"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image src={logo} alt="Logo" style={{ height: 60, width: "auto" }} />
          <Text fontFamily="sans-serif" fontSize="2xl" ml={2}>
            HealthPitch
          </Text>
        </Box>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
