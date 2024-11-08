import { MwMarkerType } from "../../protobufs/protofiles-out/manawave-types";
import { ManawaveVmInstruction, MvmRegisterId } from "../../protobufs/protofiles-out/manawave-vm";


export const createAddCountersToMyClanInstructionSet = (
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
