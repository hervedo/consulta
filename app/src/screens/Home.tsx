import { Center, FlatList, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Questionario } from "@components/Questionario";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [questionarios, setQuestionarios] = useState<string[]>([]);
  const [questionarioSelecionado, setQuestionarioSelecionado] =
    useState("Teste");

  function atualiza() {
    setQuestionarios(["Teste", "Novo Teste"]);
  }

  function abreQuestionario(questionarioId: string) {
    navigation.navigate("responde", { questionarioId });
  }

  useEffect(() => {
    atualiza();
  }, []);

  return (
    <VStack flex={1}>
      <HStack
        bg="gray.600"
        pt={16}
        pb={5}
        px={8}
        justifyContent="space-between"
      >
        <Text color="gray.100" mr={4} fontSize="md">
          Olá
        </Text>
        <TouchableOpacity onPress={atualiza}>
          <Icon
            as={FontAwesome5}
            name="network-wired"
            color="gray.200"
            size={8}
            mr={4}
          />
        </TouchableOpacity>
      </HStack>

      <Center>
        <Text color="gray.700" mr={4} fontSize="lg" mt={12}>
          Questionários Aplicáveis
        </Text>
      </Center>

      <FlatList
        data={questionarios}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Center paddingBottom={8}>
            <Questionario name={item} onPress={() => abreQuestionario(item)} />
          </Center>
        )}
        showsVerticalScrollIndicator
        _contentContainerStyle={{
          paddingBottom: 20,
          paddingTop: 12,
        }}
      />
    </VStack>
  );
}
