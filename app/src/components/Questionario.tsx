import { Text, Pressable, IPressableProps } from "native-base";

type Props = IPressableProps & {
  name: string;
};

export function Questionario({ name, ...rest }: Props) {
  console.log(name);

  return (
    <Pressable
      mr={4}
      ml={4}
      w="full"
      h={20}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        color={"gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}
