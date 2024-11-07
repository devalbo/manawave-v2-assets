import { MwMarkerType } from "../../protobufs/protofiles-out/manawave-types";
import { ManawaveVmInstruction, MvmRegisterId } from "../../protobufs/protofiles-out/manawave-vm";


export const createAddClanCountersInstructionSet = (
  markerType: MwMarkerType, 
  quantity: number
): ManawaveVmInstruction[] => { 
  return [
    { 
      instruction: {
        oneofKind: 'setActiveMarkerTypeToType',
        setActiveMarkerTypeToType: {
          markerType,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'setActiveMarkerCountToAmount',
        setActiveMarkerCountToAmount: {
          amount: quantity,
        },
      },
    },  
    {
      instruction: {
        oneofKind: 'pushMyPlayerSideValueToRegister',
        pushMyPlayerSideValueToRegister: {
          registerId: MvmRegisterId.MvmRegister_1,
        },
      },
    },
    {
      instruction: {
        oneofKind: 'applyActiveMarkerRegistersToClanForPlayerSideClanCoordinateValueRegister',
        applyActiveMarkerRegistersToClanForPlayerSideClanCoordinateValueRegister: {
          registerId: MvmRegisterId.MvmRegister_1,
        },
      },
    },
  ];
}
