class RecintosZoo {
    constructor() {
        this.animais = {
            "LEAO": { tamanho: 3, biomas: ["savana"], carnivoro: true },
            "LEOPARDO": { tamanho: 2, biomas: ["savana"], carnivoro: true },
            "CROCODILO": { tamanho: 3, biomas: ["rio"], carnivoro: true },
            "MACACO": { tamanho: 1, biomas: ["savana", "floresta"], carnivoro: false },
            "GAZELA": { tamanho: 2, biomas: ["savana"], carnivoro: false },
            "HIPOPOTAMO": { tamanho: 4, biomas: ["savana", "rio"], carnivoro: false }
        };

        this.recintos = [
            { numero: 1, biomas: ["savana"], tamanhoTotal: 10, animais: [{ especie: "MACACO", quantidade: 3 }] },
            { numero: 2, biomas: ["floresta"], tamanhoTotal: 5, animais: [] },
            { numero: 3, biomas: ["savana", "rio"], tamanhoTotal: 7, animais: [{ especie: "GAZELA", quantidade: 1 }] },
            { numero: 4, biomas: ["rio"], tamanhoTotal: 8, animais: [] },
            { numero: 5, biomas: ["savana"], tamanhoTotal: 9, animais: [{ especie: "LEAO", quantidade: 1 }] }
        ];
    }

    analisaRecintos(animal, quantidade) {
        if (!this.animais[animal]) {
            return { erro: "Animal inválido" };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const infoAnimal = this.animais[animal];
        
        const espacoNecessario = infoAnimal.tamanho * quantidade;
        let recintosViaveis = [];

        // Verificar recintos
        for (let recinto of this.recintos) {
            console.log(`Recinto ${recinto.numero}:`);
            let espacoOcupado = 0;
            let carnivorosPresentes = false;
            let macacoPresente = false;
            let biomaCompativel = false;

            // Verificar compatibilidade de biomas
            for (const bioma of recinto.biomas) {
                if (infoAnimal.biomas.includes(bioma)) {
                    biomaCompativel = true;
                    break; // Encontrou um bioma compatível, então pode parar o laço
                }
            }

            if (!biomaCompativel) {
                continue;
            }

            // Verificar espaço ocupado e se há conflito de espécies
            for (let animalExistente of recinto.animais) {
                const infoAnimalExistente = this.animais[animalExistente.especie];
                console.log(`infoAnimalExistente.biomas: ${infoAnimalExistente.biomas}`);
                espacoOcupado += infoAnimalExistente.tamanho * animalExistente.quantidade;

                if (infoAnimalExistente.carnivoro) {
                    carnivorosPresentes = true;
                }

                if (animalExistente.especie === "MACACO") {
                    macacoPresente = true;
                }

                // Carnívoros só podem ficar com a mesma espécie
                console.log(`animal =  ${animal}`);
                console.log(`infoAnimal.carnivoro =  ${infoAnimal.carnivoro}`);
                console.log(`infoAnimalExistente.especie =  ${infoAnimalExistente.especie}`);
                if (infoAnimal.carnivoro && animalExistente.especie !== animal) {
                    espacoOcupado = recinto.tamanhoTotal + 1; // Faz com que o recinto não seja viável
                    console.log(`entrou ${espacoOcupado}`);
                    break;
                }
            }

            // Hipopótamos só ficam com outras espécies se estiverem em savana e rio
            if (animal === "HIPOPOTAMO" && recinto.animais.length > 0) {
                if (!recinto.biomas.includes("savana") || !recinto.biomas.includes("rio")) {
                    continue; // Pula o recinto pois não é viável
                }
            }

            // Macacos não podem ficar sozinhos
            if (animal === "MACACO" && quantidade === 1 && !macacoPresente && recinto.animais.length === 0) {
                continue;
            }

            // Se o recinto contém carnívoro e o novo animal não é da mesma espécie
            if (carnivorosPresentes && !infoAnimal.carnivoro) {
                continue; // Pula o recinto pois não é viável
            }

            // Considerar espaço extra para múltiplas espécies
            if (recinto.animais.length > 0 && !infoAnimal.carnivoro) {
                const especiesPresentes = recinto.animais.map(a => a.especie);
                if (!especiesPresentes.includes(animal)) {
                    espacoOcupado += 1; // Somente adiciona o espaço extra se for de espécie diferente
                }
            }

            const espacoRestante = recinto.tamanhoTotal - espacoOcupado - espacoNecessario;
            
            //console.log(`Recinto ${recinto.numero}:`);
            console.log(`Espaço ocupado: ${espacoOcupado}`);
            console.log(`Espaço necessário: ${espacoNecessario}`);
            console.log(`Espaço restante: ${espacoRestante}`);

            // Adiciona o recinto à lista se houver espaço suficiente
            if (espacoRestante >= 0) {
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoRestante} total: ${recinto.tamanhoTotal})`);
            }
        }

        
        if (recintosViaveis.length > 0) {
            return { recintosViaveis: recintosViaveis.sort() };
        } else {
            return { erro: "Não há recinto viável" };
        }
    }
}

export { RecintosZoo as RecintosZoo };
