import { useRouter } from "next/router";
const Project = () => {
    const router = useRouter();
    const slug = router.query.project;
    return (
        <div className="project__container">{slug}</div>
    )
}

export default Project;