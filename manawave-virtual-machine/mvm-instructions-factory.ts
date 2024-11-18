import { MwMarkerType } from "@mw-protobufs/manawave-types";
import { ManawaveVmInstruction, MvmAmountQueryFunctionId, MvmAtomicInstruction, MvmBoolQueryFunctionId, MvmRegisterId } from "@mw-protobufs/manawave-vm";


export const createNoOpInstructionSet = (): ManawaveVmInstruction[] => {
  return [];
}


export const createAtomicManawaveVmInstruction = (
  instruction: MvmAtomicInstruction
): ManawaveVmInstruction => {
  return {
    instruction: {
      oneofKind: 'atomicInstruction',
      atomicInstruction: instruction,
    },
  };
}


export const stripToAtomicInstructions = (instructions: ManawaveVmInstruction[]): MvmAtomicInstruction[] => {

  return instructions.map((instruction) => {
    if (instruction.instruction.oneofKind !== 'atomicInstruction') {
      console.log(instruction);
      throw new Error('Instruction is not an atomic instruction');
    }
    return instruction.instruction.atomicInstruction;
  });
}


export const createAddMarkersToMyClanInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 
  return [
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setMarkerRegister',
        setMarkerRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          registerData: {
            markerType,
            quantity,
          },
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setRegisterDataToMyClanCoordinate',
        setRegisterDataToMyClanCoordinate: {
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'applyMarkerRegisterToClanForClanCoordinateRegister',
        applyMarkerRegisterToClanForClanCoordinateRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
  ];
}


export const createRemoveMarkersFromMyClanForCountFunctionAmountInstructionSet = (
  mvmAmountQueryFunctionId: MvmAmountQueryFunctionId,
  markerType: MwMarkerType, 
): ManawaveVmInstruction[] => { 
  return [
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setMarkerRegisterAmountToMvmAmountQueryOutput',
        setMarkerRegisterAmountToMvmAmountQueryOutput: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          markerType,
          mvmAmountQueryFunctionId,
          multiplyOutputByNegative1: true,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setRegisterDataToMyClanCoordinate',
        setRegisterDataToMyClanCoordinate: {
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'applyMarkerRegisterToClanForClanCoordinateRegister',
        applyMarkerRegisterToClanForClanCoordinateRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
  ];
}


export const createAddMarkersToAdjacentClansInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 
  return [
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setMarkerRegister',
        setMarkerRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          registerData: {
            markerType,
            quantity,
          },
        },
        },
      }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setRegisterDataToMyClanCoordinate',
        setRegisterDataToMyClanCoordinate: {
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'applyMarkerRegisterToClanForClanCoordinateRegister',
        applyMarkerRegisterToClanForClanCoordinateRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
  ];
}


export const createAddMarkersToMyTribeInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 
  return [
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setMarkerRegister',
        setMarkerRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          registerData: {
            markerType,
            quantity,
          },
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setRegisterDataToMyPlayerSide',
        setRegisterDataToMyPlayerSide: {
          playerSideRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'applyMarkerRegisterToMyTribe',
        applyMarkerRegisterToMyTribe: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
        },
      },
    }),
  ];
}


export const createAddMarkersToMyClanOnConditionInstructionSet = (
  mvmBoolQueryFunctionId: MvmBoolQueryFunctionId,
  markerType: MwMarkerType, 
  quantity: number,
): ManawaveVmInstruction[] => {

  return [
    {
      instruction: {
        oneofKind: 'conditionalRunAtomicInstructions',
        conditionalRunAtomicInstructions: {
          mvmBoolQueryFunctionId,
          onTrueInstructions: [
            ...stripToAtomicInstructions(createAddMarkersToMyClanInstructionSet(markerType, quantity)),
          ],
          onFalseInstructions: [],
        },
      },
    },
  ];
}


export const createAddMarkersToMyTribeOnConditionInstructionSet = (
  mvmBoolQueryFunctionId: MvmBoolQueryFunctionId,
  markerType: MwMarkerType, 
  quantity: number,
): ManawaveVmInstruction[] => { 

  return [
    {
      instruction: {
        oneofKind: 'conditionalRunAtomicInstructions',
        conditionalRunAtomicInstructions: {
          mvmBoolQueryFunctionId,
          onTrueInstructions: [
            ...stripToAtomicInstructions(createAddMarkersToMyTribeInstructionSet(markerType, quantity)),
          ],
          onFalseInstructions: [],
        },
      },
    },
  ];
}


export const createAddMarkersToMyTribeForCountFunctionAmountInstructionSet = (
  mvmAmountQueryFunctionId: MvmAmountQueryFunctionId,
  markerType: MwMarkerType, 
): ManawaveVmInstruction[] => { 
  return [
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setMarkerRegisterAmountToMvmAmountQueryOutput',
        setMarkerRegisterAmountToMvmAmountQueryOutput: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          markerType,
          mvmAmountQueryFunctionId,
          multiplyOutputByNegative1: false,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setRegisterDataToMyPlayerSide',
        setRegisterDataToMyPlayerSide: {
          playerSideRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'applyMarkerRegisterToMyTribe',
        applyMarkerRegisterToMyTribe: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
        },
      },
    }),
  ];
}


export const createRemoveMarkersFromMyTribeForCountFunctionAmountInstructionSet = (
  mvmAmountQueryFunctionId: MvmAmountQueryFunctionId,
  markerType: MwMarkerType, 
): ManawaveVmInstruction[] => { 
  return [
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setMarkerRegisterAmountToMvmAmountQueryOutput',
        setMarkerRegisterAmountToMvmAmountQueryOutput: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          markerType,
          mvmAmountQueryFunctionId,
          multiplyOutputByNegative1: true,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setRegisterDataToMyPlayerSide',
        setRegisterDataToMyPlayerSide: {
          playerSideRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'applyMarkerRegisterToMyTribe',
        applyMarkerRegisterToMyTribe: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
        },
      },
    }),
  ];
}


export const createAddMarkersToMyClanForCountFunctionAmountInstructionSet = (
  mvmAmountQueryFunctionId: MvmAmountQueryFunctionId,
  markerType: MwMarkerType, 
): ManawaveVmInstruction[] => { 
  return [
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setMarkerRegisterAmountToMvmAmountQueryOutput',
        setMarkerRegisterAmountToMvmAmountQueryOutput: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          markerType,
          mvmAmountQueryFunctionId,
          multiplyOutputByNegative1: false,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'setRegisterDataToMyClanCoordinate',
        setRegisterDataToMyClanCoordinate: {
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
    createAtomicManawaveVmInstruction({
      instruction: {
        oneofKind: 'applyMarkerRegisterToClanForClanCoordinateRegister',
        applyMarkerRegisterToClanForClanCoordinateRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    }),
  ];
}