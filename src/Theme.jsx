import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        white: "#FFFFFF",
        seaSalt: "#F8F8F8",
        antiFlashWhite: "#EEEEEE",
        timberwolf: "#D6D6D6",
        silver: "#A5A5A5",
        dimGray: "#666666",
        onyx: "#444444",
        jet: "#333333",
        eerieBlack: "#1D1F1F",
        mintGreen: "#D0F1E9",
        tiffanyBlue: "#81D9C5",
        turquoise: "#62D0B6",
        mikadoYellow: "#FFC62A",
        folly: "#F55157",
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;