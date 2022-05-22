import { useRouter } from "next/router";
const Blog = () => {
    const router = useRouter();
    const slug = router.query.blog;
    return (
        <div className="blog__container">{slug}</div>
    )
}

export default Blog;