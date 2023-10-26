export const underlineColor = "#440066";
export const menuUnderColor = "Grey";

export const menu_bar = {
  align: "center",
  color: "black",
  paddingLeft: { base: "20px", lg: "7%" },
  paddingRight: { base: "20px", lg: "5%" },
  paddingTop: "10px",
  paddingBottom: "10px",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  top: "0px",
  left: "0px",
  right: "0px",
  background: "#fff",
};

export const menu_Divider = {
  orientation: "verrtical",
  borderColor: "#BFBFBF",
  borderWidth: "2px",
  height: "20px",
  marginTop: "27px",
  marginBottom: "2px",
  borderRadius: "30",
};
export const menuOptionStyle = {
  mx: 2,
  fontSize: "18px",
  marginTop: "27px",
  fontWeight: 600,
  position: "relative",
};

export const activeMenuOptionStyle = {
  ...menuOptionStyle,
  position: "relative",
  _after: {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "-4px",
    width: "100%",
    height: "4px",
    backgroundColor: underlineColor,
    borderRadius: "4px",
  },
};

export const dividerStyle = {
  orientation: "vertical",
  borderColor: "#BFBFBF",
  borderWidth: "2px",
  height: "21px",
  marginTop: "27px",
  marginBottom: "2px",
  borderRadius: "30",
};

export const body_pic = {
  justifyContent: "space-between",
  paddingLeft: { base: "20px", lg: "7%" },
  paddingRight: { base: "20px", lg: "7%" },
  paddingTop: "10px",
  paddingBottom: "10px",
};

export const body = {
  flexDirection: "column",
};
export const home_Text = {
  fontSize: "14px",
  fontWeight: 500,
};
export const service_text = {
  fontSize: { base: "24px", md: "30px", lg: "36px" },
  fontWeight: "600",
  color: "black",
};

export const about_text3 = {
  fontWeight: "400",
};

export const body_text = {
  fontSize: { base: "24px", md: "36px", lg: "48px" },
  fontWeight: "bold",
  color: "#440066",
};

export const body_Button = {
  height: "60px",
  width: { base: "250px", md: "420px", lg: "480px" },
  marginTop: "20px",
  fontSize: "20px",
  fontWeight: "600",
  backgroundColor: "#F7E5FF",
  borderRadius: "40px",
  color: "black",
  _hover: {
    backgroundColor: "#4C076B", // Change to the desired hover background color
    color: "white", // Change to the desired hover text color
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Change to the desired hover box shadow
  },
};

export const body_text2 = {
  fontSize: { base: "22px", md: "29px", lg: "42px" },
  fontWeight: "500",
  color: "#313131",
};
export const body_text3 = {
  marginTop: "20px",
  fontWeight: "400",
  color: "#626262",
};

export const centeredpurple = {
  color: "#4C076B",
  fontWeight: "bold",
  fontSize: "28px",
};

export const inputFieldStyle = {
  border: "2px solid grey",
  borderRadius: "30px",
  padding: "12px",
  fontSize: "16px",
  height: "50px",
  size: "medium",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
};

export const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

export const linkStyle = {
  color: "#811C92",
  cursor: "pointer",
};


export const textStyle = {
  fontSize: "16px",
  fontWeight: "normal",
};

export const rowContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const dividerStyling = {
  borderColor: "#BFBFBF",
  borderWidth: "1px",
};

export const dividerTextStyling = {
  color: "#BFBBBB",
};


export const body_Button2 = {
  marginTop: "20px",
  fontSize: "20px",
  fontWeight: "400",
  backgroundColor: "#4C076B",
  borderRadius: "40px",
  color: "white",
  _hover: {
    backgroundColor: "#F7E5FF", // Change to the desired hover background color
    color: "black", // Change to the desired hover text color
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Change to the desired hover box shadow
  }
};

export const body_Button3 = {
  padding: "12px",
  fontSize: "16px",
  backgroundColor: "#811C92",
  borderRadius: "10px",
  color: "white",
  _hover: {
    backgroundColor: "#F7E5FF", // Change to the desired hover background color
    color: "black", // Change to the desired hover text color
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Change to the desired hover box shadow
  }
};

export const aboutText = {
  fontWeight: "600",
  color: underlineColor,
  fontSize: "32px",
};

export const blog_text = {
  fontWeight: "600",
  color: "black",
};