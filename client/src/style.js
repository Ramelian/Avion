const styles = {
  boxWidth: "px-6 mx-auto w-full xl:max-w-[1280px] px-20",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetween: "flex justify-between items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  button: "py-4 px-8 duration-200 sm:w-full md:w-auto",
  primary: "bg-white text-primary-dark hover:bg-primary-dark hover:text-white",
  secondary: "bg-lightGray text-primary-dark hover:bg-primary hover:text-white",
  primaryDark: "bg-primary-dark text-white hover:bg-gray-300 hover:text-primary-dark",
  secondaryDark: "bg-lightGray/[0.15] text-white hover:bg-primary",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
