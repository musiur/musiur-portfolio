import { useRouter } from "next/router";
const Blog = () => {
    const router = useRouter();
    const slug = router.query.blog;
    return (
        <div>{slug}</div>
    )
}

export default Blog;