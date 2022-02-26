import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Nicácio</Text>
          <Text color="gray.300" fontSize="small">
            danielfigueiredo789@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Daniel Nicácio"
        src="https://avatars.githubusercontent.com/u/70770484?s=96&v=4"
      />
    </Flex>
  );
}
