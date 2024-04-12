'use client'

import { useState, useEffect } from "react";
import {
  Box,
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Circle,
  Text,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  CryptoLending,
  DeFi,
  Payment,
  PersonalFinance,
  Tax,
  Exchange,
} from "./components";
import { motion } from "framer-motion";

const selectedTabStyle = {
  bg: "white",
  color: "black",
};

export const Tabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const intervalDuration = 10000; // 10 seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        // Switch to the next tab after the interval
        setSelectedTabIndex((prevIndex) => {
          // Check if it's the last tab, then reset to the first tab
          if (prevIndex === 5) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }
    }, intervalDuration);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isHovered]);

  // Update progress value based on selectedTabIndex and isHovered
  useEffect(() => {
    setProgressValue(0); // Reset progress value
    const progressIntervalId = setInterval(() => {
      if (!isHovered) {
        setProgressValue((prevValue) => (prevValue + 1) % 102); // Increment progress value from 0 to 100
      }
    }, intervalDuration / 102); // Adjust interval for smooth progress animation

    return () => clearInterval(progressIntervalId); // Cleanup the progress interval on tab change
  }, [selectedTabIndex, intervalDuration, isHovered]);

  return (
    <Box mt={8}>
      <Stack flexDirection="column" spacing={8}>
        <Box>
          <Heading
            w={{ base: "100%", lg: "76%", "2xl": "60%" }}
            size={{ sm: "lg", md: "2xl" }}
            fontWeight="medium"
            letterSpacing={-1}
          >
            How Tensfer powers businesses.
          </Heading>
        </Box>

        <Box w={{ sm: "100%", lg: "700px" }}>
          <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
            A single integration for multiple use cases across industries.
          </Text>
        </Box>
      </Stack>
      <Box
        mt={12}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        minH={{ base: "auto", lg: "600px", "2xl": "740px" }}
        bgGradient={
          selectedTabIndex === 0
            ? "linear(to right, #fce7df 30%, #beebff)"
            : selectedTabIndex === 1
            ? "linear(#f1f4ff 0%, purple.50 100%)"
            : selectedTabIndex === 2
            ? "linear(#f1f4ff 0%, blue.50 100%)"
            : selectedTabIndex === 3
            ? "linear(#f1f4ff 0%, green.50 100%)"
            : selectedTabIndex === 4
            ? "linear(#f1f4ff 0%, green.50 100%)"
            : selectedTabIndex === 5
            ? "linear(#f1f4ff 0%, blue.50 100%)"
            : "blue"
        }
        borderRadius="2xl"
        boxShadow="2xl"
      >
        <ChakraTabs
          variant="soft-rounded"
          index={selectedTabIndex}
          onChange={(index) => setSelectedTabIndex(index)}
        >
          <TabList justifyContent="space-around" p={{ sm: 4, md: 8 }}>
            <SimpleGrid columns={[3, null, 6]} spacing={{ base: 2, md: 12 }}>
              {selectedTabIndex == 0 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="orange" size="7px" mt={2} />
                    <Text>Payment</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Payment</Tab>
              )}
              {selectedTabIndex == 1 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="purple" size="7px" mt={2} />
                    <Text>Exchange</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Exchange</Tab>
              )}
              {selectedTabIndex == 2 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="#8fc6fa" size="7px" mt={2} />
                    <Text>Finance</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Finance</Tab>
              )}
              {selectedTabIndex == 3 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="green" size="7px" mt={2} />
                    <Text>Lending</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Lending</Tab>
              )}
              {selectedTabIndex == 4 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="#0bb586" size="7px" mt={2} />
                    <Text>DeFi</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">DeFi</Tab>
              )}
              {selectedTabIndex == 5 ? (
                <Tab as={Box} bg="whiteAlpha.500" _selected={selectedTabStyle}>
                  <Stack spacing={2} direction="row">
                    <Circle bg="#8fc6fa" size="7px" mt={2} />
                    <Text>Tax</Text>
                  </Stack>
                </Tab>
              ) : (
                <Tab bg="whiteAlpha.500">Tax</Tab>
              )}
            </SimpleGrid>
          </TabList>
          {selectedTabIndex == 0 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              exit={{ width: 90 }}
              transition={{ duration: 0.12, ease: "linear" }}
              style={{
                height: "3px",
                background: "orange",
                borderRadius: "2px",
              }}
            />
          )}
          {selectedTabIndex == 1 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              exit={{ width: 90 }}
              transition={{ duration: 0.12, ease: "linear" }}
              style={{
                height: "3px",
                background: "purple",
                borderRadius: "2px",
              }}
            />
          )}
          {selectedTabIndex == 2 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              exit={{ width: 90 }}
              transition={{ duration: 0.12, ease: "linear" }}
              style={{
                height: "3px",
                background: "#b0daff",
                borderRadius: "2px",
              }}
            />
          )}
          {selectedTabIndex == 3 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              exit={{ width: 90 }}
              transition={{ duration: 0.12, ease: "linear" }}
              style={{
                height: "3px",
                background: "green",
                borderRadius: "2px",
              }}
            />
          )}
          {selectedTabIndex == 4 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              exit={{ width: 90 }}
              transition={{ duration: 0.12, ease: "linear" }}
              style={{
                height: "3px",
                background: "#0bb586",
                borderRadius: "2px",
              }}
            />
          )}
          {selectedTabIndex == 5 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              exit={{ width: 90 }}
              transition={{ duration: 0.12, ease: "linear" }}
              style={{
                height: "3px",
                background: "#b0daff",
                borderRadius: "2px",
              }}
            />
          )}
          <TabPanels mt={6} p={{ sm: 4, md: 8 }}>
            <TabPanel>
              <Payment />
            </TabPanel>

            <TabPanel>
              <Exchange />
            </TabPanel>

            <TabPanel>
              <PersonalFinance />
            </TabPanel>

            <TabPanel>
              <CryptoLending />
            </TabPanel>

            <TabPanel>
              <DeFi />
            </TabPanel>

            <TabPanel>
              <Tax />
            </TabPanel>
          </TabPanels>
        </ChakraTabs>
      </Box>
    </Box>
  );
};

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Tabs as ChakraTabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Heading,
//   Circle,
//   Text,
//   Stack,
//   SimpleGrid,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import {
//   CryptoLending,
//   DeFi,
//   Payment,
//   PersonalFinance,
//   Tax,
// } from "./components";

// const selectedTabStyle = {
//   bg: "white",
//   color: "black",
// };

// const tabData = [
//   { label: "Exchange", color: "purple" },
//   { label: "Finance", color: "#8fc6fa" },
//   { label: "Lending", color: "orange" },
//   { label: "DeFi", color: "green" },
//   { label: "Tax", color: "#8fc6fa" },
// ];

// export const Tabs = () => {
//   const [selectedTabIndex, setSelectedTabIndex] = useState(0);
//   const [progressValue, setProgressValue] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const intervalDuration = 10000; // 10 seconds

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (!isHovered) {
//         setSelectedTabIndex((prevIndex) => (prevIndex + 1) % tabData.length);
//       }
//     }, intervalDuration);

//     return () => clearInterval(intervalId);
//   }, [isHovered]);

//   useEffect(() => {
//     setProgressValue(0);
//     const progressIntervalId = setInterval(() => {
//       if (!isHovered) {
//         setProgressValue((prevValue) => (prevValue + 1) % 102);
//       }
//     }, intervalDuration / 102);

//     return () => clearInterval(progressIntervalId);
//   }, [selectedTabIndex, intervalDuration, isHovered]);

//   return (
//     <Box
//       mt={8}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Heading
//         w={{ base: "100%", lg: "76%", "2xl": "70%" }}
//         size={{ sm: "xl", md: "2xl" }}
//         fontWeight="medium"
//         letterSpacing={-1}
//       >
//         Powering success stories across all industries.
//       </Heading>
//       <Box
//         mt={12}
//         bgGradient={
//           selectedTabIndex === 0
//             ? "linear(#f1f4ff 0%, purple.50 100%)"
//             : selectedTabIndex === 1
//             ? "linear(#f1f4ff 0%, blue.50 100%)"
//             : selectedTabIndex === 2
//             ? "linear(#f1f4ff 0%, orange.50 100%)"
//             : selectedTabIndex === 3
//             ? "linear(#f1f4ff 0%, green.50 100%)"
//             : selectedTabIndex === 4
//             ? "linear(#f1f4ff 0%, blue.50 100%)"
//             : "blue"
//         }
//         borderRadius="2xl"
//         boxShadow="2xl"
//       >
//         <ChakraTabs
//           variant="soft-rounded"
//           index={selectedTabIndex}
//           onChange={(index) => setSelectedTabIndex(index)}
//         >
//           <TabList justifyContent="space-around" p={{ sm: 4, md: 8 }}>
//             <SimpleGrid columns={[2, null, 5]} spacing={{ base: 2, md: 12 }}>
//               {tabData.map((tab, index) => (
//                 <Tab
//                   key={index}
//                   as={Box}
//                   bg="whiteAlpha.500"
//                   _selected={selectedTabStyle}
//                 >
//                   <Stack spacing={2} direction="row">
//                     <Circle
//                       bg={index === selectedTabIndex ? tab.color : "default"}
//                       size="7px"
//                       mt={2}
//                     />
//                     <Text>{tab.label}</Text>
//                   </Stack>
//                 </Tab>
//               ))}
//             </SimpleGrid>
//           </TabList>
//           {tabData.map((tab, index) => (
//             <motion.div
//               key={index}
//               initial={{ width: 0 }}
//               animate={{
//                 width: index === selectedTabIndex ? `${progressValue}%` : 0,
//               }}
//               exit={{ width: 90 }}
//               transition={{ duration: 0.12, ease: "linear" }}
//               style={{
//                 height: "3px",
//                 background: tab.color,
//                 borderRadius: "2px",
//               }}
//             />
//           ))}
//           <TabPanels mt={12} p={{ sm: 4, md: 8 }}>
//             {[
//               <Payment key={0} />,
//               <PersonalFinance key={1} />,
//               <CryptoLending key={2} />,
//               <DeFi key={3} />,
//               <Tax key={4} />,
//             ].map((component, index) => (
//               <TabPanel key={index}>{component}</TabPanel>
//             ))}
//           </TabPanels>
//         </ChakraTabs>
//       </Box>
//     </Box>
//   );
// };
