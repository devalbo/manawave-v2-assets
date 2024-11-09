import { MwMarkerType } from "../../protobufs/protofiles-out/manawave-types";
import { ManawaveVmInstruction, MvmFunctionId, MvmRegisterId } from "../../protobufs/protofiles-out/manawave-vm";


export const createNoOpInstructionSet = (): ManawaveVmInstruction[] => {
  return [];
}


export const createAddMarkersToMyClanInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 
  return [
    { 
      instruction: {
        oneofKind: 'setMarkerRegisterData',
        setMarkerRegisterData: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          registerData: {
            markerType,
            quantity,
          },
        },
      },
    },
    {
      instruction: {
        oneofKind: 'setRegisterToMyClanCoordinate',
        setRegisterToMyClanCoordinate: {
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'applyMarkerRegisterToClanForClanCoordinateRegister',
        applyMarkerRegisterToClanForClanCoordinateRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    },
  ];
}


export const createAddMarkersToAdjacentClansInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 
  return [
    { 
      instruction: {
        oneofKind: 'setMarkerRegisterData',
        setMarkerRegisterData: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          registerData: {
            markerType,
            quantity,
          },
        },
      },
    },
    {
      instruction: {
        oneofKind: 'setRegisterToMyClanCoordinate',
        setRegisterToMyClanCoordinate: {
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'applyMarkerRegisterToClanForClanCoordinateRegister',
        applyMarkerRegisterToClanForClanCoordinateRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    },
  ];
}


export const createAddMarkersToMyTribeInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 
  return [
    { 
      instruction: {
        oneofKind: 'setMarkerRegisterData',
        setMarkerRegisterData: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          registerData: {
            markerType,
            quantity,
          },
        },
      },
    },
    {
      instruction: {
        oneofKind: 'setRegisterToMyPlayerSide',
        setRegisterToMyPlayerSide: {
          playerSideRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'applyMarkerRegisterToMyTribe',
        applyMarkerRegisterToMyTribe: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
        },
      },
    },
  ];
}



export const createAddCountersToMyClanModifiedByFunctionAmountInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number,
  mvmFunctionId: MvmFunctionId
): ManawaveVmInstruction[] => { 
  
  return [
    { 
      instruction: {
        oneofKind: 'setMarkerRegisterData',
        setMarkerRegisterData: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          registerData: {
            markerType,
            quantity,
          },
        },
      },
    },
    {
      instruction: {
        oneofKind: 'setRegisterAmountToFunctionOutput',
        setRegisterAmountToFunctionOutput: {
          amountRegisterId: MvmRegisterId.MvmRegister_2,
          mvmFunctionId,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'adjustMarkerRegisterDataAmountByRegisterAmount',
        adjustMarkerRegisterDataAmountByRegisterAmount: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          amountRegisterId: MvmRegisterId.MvmRegister_2,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'setRegisterToMyClanCoordinate',
        setRegisterToMyClanCoordinate: {
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_3,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'applyMarkerRegisterToClanForClanCoordinateRegister',
        applyMarkerRegisterToClanForClanCoordinateRegister: {
          markerRegisterId: MvmRegisterId.MvmRegister_1,
          clanCoordinateRegisterId: MvmRegisterId.MvmRegister_3,
        },
      },
    },
  ];
}


export const createAddCountersToMyTribeModifiedBySoulstainInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 

  throw new Error('Not implemented');
}



// export const createReduceMyClanMarkersIfMyTribeHasSoulstainInstructionSet = (
//   markerType: MwMarkerType,
//   quantity: number,
// ): ManawaveVmInstruction[] => {
//   return [
//     { 
//       instruction: {
//         oneofKind: 'adjustMarkerRegisterDataAmountByAmount',
//         adjustMarkerRegisterDataAmountByAmount: {
//           markerRegisterId: MvmRegisterId.MvmRegister_1,
//           amount: quantity,
//         },
//       },
//     },
//     {
//       instruction: {
//         oneofKind: 'setRegisterToMyPlayerSide',
//         setRegisterToMyPlayerSide: {
//           playerSideRegisterId: MvmRegisterId.MvmRegister_2,
//         },
//       },
//     },
//     {
//       instruction: {
//         oneofKind: 'applyMarkerRegisterToMyTribe',
//         applyMarkerRegisterToMyTribe: {
//           markerRegisterId: MvmRegisterId.MvmRegister_1,
//         },
//       },
//     },
//   ];
// }


// export const createReduceMyTribeMarkersIfMyTribeHasSoulstainInstructionSet = (
//   markerType: MwMarkerType,
//   quantity: number,
// ): ManawaveVmInstruction[] => {
//   return [];
// }