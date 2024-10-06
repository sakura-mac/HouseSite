import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const BlogSideBar = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // 每页展示的博客数量

  useEffect(() => {
    // 加载博客列表的 JSON 文件
    fetch('/blogs/blog-list.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error('Error loading blog list:', error));
  }, []);

  // 分页逻辑
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // 处理翻页
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
      <div className="blog-standard-area pt-90 pb-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <div className="blog-standard">
                {currentBlogs.map((blog, index) => (
                    <div className="single-blog-standard mt-30" key={index}>
                      <div className="blog-standard-thumb">
                        {/* 直接从文件夹中加载 cover.jpg */}
                        <img
                            src={`/blogs/${blog.folderName}/cover.jpg`}
                            alt={blog.title || 'Blog cover'}
                        />
                      </div>
                      <div className="blog-standard-content">
                        <span>{blog.category || 'Uncategorized'}</span>
                        <h2 className="title">
                          <Link to={`/blog-details/${blog.folderName}`}>{blog.title}</Link>
                        </h2>
                        <ul>
                          <li><i className="fal fa-calendar-alt" /> {new Date(blog.date).toLocaleDateString()}</li>
                        </ul>
                        <p>{blog.description || blog.excerpt}</p>
                        <div className="blog-flex">
                          <div className="blog-right">
                            <Link to={`/blog-details/${blog.folderName}`}>
                              <i className="fal fa-arrow-right" /> 了解更多
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
                {/* 分页 */}
                <Row>
                  <Col lg="12">
                    <nav className="mt-60" aria-label="Page navigation example">
                      <ul className="pagination pagination-2 justify-content-center">
                        <li className="page-item">
                          <Link
                              className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}
                              onClick={() => paginate(currentPage - 1)}
                              to="#"
                              tabIndex={-1}
                              aria-disabled={currentPage === 1}
                          >
                            <i className="far fa-chevron-double-left" />
                          </Link>
                        </li>
                        {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(page => (
                            <li key={page + 1} className="page-item">
                              <Link
                                  className={`page-link ${currentPage === page + 1 ? 'active' : ''}`}
                                  onClick={() => paginate(page + 1)}
                                  to="#"
                              >
                                {page + 1}
                              </Link>
                            </li>
                        ))}
                        <li className="page-item">
                          <Link
                              className={`page-link ${currentPage === Math.ceil(blogs.length / blogsPerPage) ? 'disabled' : ''}`}
                              onClick={() => paginate(currentPage + 1)}
                              to="#"
                              aria-disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
                          >
                            <i className="far fa-chevron-double-right" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default BlogSideBar;
