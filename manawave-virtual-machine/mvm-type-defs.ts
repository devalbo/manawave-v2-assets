
export type MvmInstructionArgType = 
  'MVM_INSTRUCTION_ARG_TYPE_COUNTER' |
  'MVM_INSTRUCTION_ARG_TYPE_COUNTING_FN_NAME' |
  'MVM_INSTRUCTION_ARG_TYPE_INT_AMOUNT' |
  'MVM_INSTRUCTION_ARG_TYPE_CLAN_CARD_COORDINATE'



export type MvmInstruction_SetActiveMarkerType = {
  instruction: 'MVMI_SET_ACTIVE_MARKER_TYPE',
  argsTypes: [
    'MVM_INSTRUCTION_ARG_TYPE_MARKER_TYPE',
  ]
}

export type MvmInstruction_SetActiveMarkerCount_To_Amount = {
  instruction: 'MVMI_SET_ACTIVE_MARKER_COUNT_TO_AMOUNT',
  argsTypes: [
    'MVM_INSTRUCTION_ARG_TYPE_INT_AMOUNT',
  ]
}

export type MvmInstruction_SetActiveMarkerCount_To_Fn_Result = {
  instruction: 'MVMI_SET_ACTIVE_MARKER_COUNT_TO_FN_RESULT',
  argsTypes: [
    'MVM_INSTRUCTION_ARG_TYPE_COUNTING_FN_NAME',
  ]
}

export type MvmInstruction_AjdustActiveMarkerCount_By_Amount = {
  instruction: 'MVMI_ADJUST_ACTIVE_MARKER_COUNT_BY_AMOUNT',
  argsTypes: [
    'MVM_INSTRUCTION_ARG_TYPE_INT_AMOUNT',
  ]
}


export type MvmInstruction_AjdustActiveMarkerCount_By_Fn_Result = {
  instruction: 'MVMI_ADJUST_ACTIVE_MARKER_COUNT_BY_FN_RESULT',
  argsTypes: [
    'MVM_INSTRUCTION_ARG_TYPE_COUNTING_FN_NAME',
  ]
}

export type MvmInstruction_ApplyActiveMarkerRegisters_To_MySideTribeStockpile = {
  instruction: 'MVMI_APPLY_ACTIVE_MARKER_REGISTERS_TO_MY_SIDE_TRIBE_STOCKPILE',
  argsTypes: []
}

export type MvmInstruction_ApplyActiveMarkerRegisters_To_MyClanStockpile = {
  instruction: 'MVMI_APPLY_ACTIVE_MARKER_REGISTERS_TO_MY_CLAN_STOCKPILE',
  argsTypes: []
}

export type MvmInstruction_ApplyActiveMarkerRegisters_To_SpecificClanStockpile = {
  instruction: 'MVMI_APPLY_ACTIVE_MARKER_REGISTERS_TO_SPECIFIC_CLAN_STOCKPILE',
  argsTypes: [
    'MVM_INSTRUCTION_ARG_TYPE_CLAN_CARD_COORDINATE',
  ]
}


export type MvmInstruction = 
  MvmInstruction_SetActiveMarkerType |
  MvmInstruction_SetActiveMarkerCount_To_Amount |
  MvmInstruction_SetActiveMarkerCount_To_Fn_Result |
  MvmInstruction_AjdustActiveMarkerCount_By_Amount |
  MvmInstruction_AjdustActiveMarkerCount_By_Fn_Result |
  MvmInstruction_ApplyActiveMarkerRegisters_To_MySideTribeStockpile |
  MvmInstruction_ApplyActiveMarkerRegisters_To_MyClanStockpile |
  MvmInstruction_ApplyActiveMarkerRegisters_To_S
  