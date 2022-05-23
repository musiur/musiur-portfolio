import { useRouter } from "next/router";
const Blog = () => {
    const router = useRouter();
    const slug = router.query.blog;
    return (
        <div className="blog__container">{slug} under construction</div>
    )
}

export default Blog;