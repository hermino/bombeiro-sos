import React, { useState, useContext } from 'react'

    const RelatorioContext = React.createContext( {relatorio: {larguraPorta : null,
        larguraEscada : null,
        pisoAntiderrapante : null,
        guardaCorpoAltura : null,
        detrancadas : null,
        corrimaoAmbosOsLados : null,
        corrimaoMezanino : null,
        materialEscada : null,
        barrasAntipanico : null,
        outrosItensObservados1 : null,},
        setRelatorio : () => {}}) 

export const RelatorioProvider = RelatorioContext.Provider
export const RelatorioConsumer = RelatorioContext.Consumer

export default RelatorioContext