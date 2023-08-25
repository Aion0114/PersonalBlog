import router from "@/router/index";

export default {
    props: {

    },
    setup() {
        return {
            jumpToHome() {
                router.push("/home");
            },
            jumpToAbout() {
                router.push("/about");
            },
            jumpToProject() {
                router.push("/project");
            },
            jumpToPhoto() {
                router.push("/photo");
            },
        }
    }
}