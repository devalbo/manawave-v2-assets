import { BoardPlayerSideCoordinate } from "../../protobufs/protofiles-out/manawave-board";
import { MwMarkerType } from "../../protobufs/protofiles-out/manawave-types";
import { ManawaveVmInstruction, MvmRegisterId } from "../../protobufs/protofiles-out/manawave-vm";
import { ClanCardInPlayInstance } from "../PIECES/type-defs/type-defs";


export const createAddCountersToMyClanInstructionSet = (
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
