const styles = {
    // Box width utility class
    boxWidth: "xl:max-w-[1280px] w-full",

    // Heading 2 styles
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

    // Paragraph styles
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    // Flex utility classes
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    // Padding utility classes
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    // Margin utility classes
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

// Layout utility classes
export const layout = {
    // Section layout with vertical padding
    section: `flex md:flex-row flex-col ${styles.paddingY}`,

    // Reversed section layout with vertical padding
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    // Section layout with reversed image position and vertical padding
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

    // Section layout with image position and vertical padding
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    // Section info layout with flex properties
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
