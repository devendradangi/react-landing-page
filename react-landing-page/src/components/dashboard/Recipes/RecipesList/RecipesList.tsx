import { useEffect, useRef, useState } from "react";
import { fetchDataByDummyJSON } from "../../../../services/recipes-service";
import { Badge, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegSadTear } from "react-icons/fa";
import PaginationComponent from "../../../common/Pagination/PaginationComponent";
import { getPaginationData } from "../../../../common";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setRecipes, setSearchQuery, setTotalCount } from "../../../../state/recipesSlice";
import { RootState } from "../../../../state/store";
import CommonLoader from "../../../common/CommonLoader/CommonLoader";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../../common/NoDataFound/NoDataFound";
import { noImage } from "../../../../utils/utils";

const RecipesList = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { recipes, totalCount, currentPage, searchQuery } = useSelector(
        (state: RootState) => state.recipes
    );

    const [loading, setLoading] = useState<boolean>(false);

    const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);

    const limit = 12;

    const hasFetched = useRef(false);

    const fetchRecipes = async (page: number) => {

        const { skip, limit } = getPaginationData(page, 12);

        const params = new URLSearchParams({
            skip: skip.toString(),
            limit: limit.toString(),
        });

        setLoading(true);

        try {
            const data = await fetchDataByDummyJSON(`/recipes?${params.toString()}`);
            dispatch(setRecipes(data?.recipes));
            dispatch(setTotalCount(data?.total));
            dispatch(setCurrentPage(page));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetchRecipes(currentPage);
        }
    }, [currentPage]);

    useEffect(() => {
        if (searchQuery?.trim()) {
            const filtered = recipes?.filter((recipe: any) =>
                recipe?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
            );
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes(recipes);
        }
    }, [recipes, searchQuery]);


    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const decimalPart = rating - fullStars;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`}>{FaStar({ color: "#facc15" })}</span>);
        }

        if (decimalPart >= 0.75) {
            stars.push(<span key="last">{FaStar({ color: "#facc15" })}</span>);
        } else if (decimalPart >= 0.25) {
            stars.push(<span key="half">{FaStarHalfAlt({ color: "#facc15" })}</span>);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`}>{FaRegStar({ color: "#facc15" })}</span>);
        }

        return (
            <div className="d-flex align-items-center gap-2">
                <div className="d-flex">{stars}</div>
                <span className="text-muted">({rating.toFixed(1)} %)</span>
            </div>
        );
    };


    return (
        <Container className="py-4">
            <h1 className="mb-4">Recipes</h1>
            <div className="d-flex justify-content-end align-items-end mr-auto">
                <Form.Group controlId="searchRecipes" className="mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Search by recipe name..."
                        value={searchQuery}
                        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                    />
                </Form.Group>
            </div>
            <CommonLoader loadingState={loading} message="Fetching Recipes..." />
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {filteredRecipes.map((recipe: any) => (
                    <Col key={recipe.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={recipe?.image || noImage}
                                alt={recipe?.name}
                                style={{ height: "200px", objectFit: "cover" }}
                                loading="lazy"
                            />
                            <Card.Body>
                                <Card.Title
                                    onClick={() => navigate(`/dashboard/recipes/${recipe.id}`, { state: recipe })}>
                                    {recipe?.name}
                                </Card.Title>

                                <div>{renderStars(recipe?.rating)}</div>

                                <Card.Text>
                                    <strong>Reviews:</strong> {recipe?.reviewCount}
                                </Card.Text>

                                <div className="d-flex flex-wrap gap-1">
                                    {recipe?.tags?.map((tag: any, index: any) => (
                                        <Badge bg="secondary" key={index}>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>

            {!loading && filteredRecipes?.length === 0 && (
                <NoDataFound
                    icon={<>{FaRegSadTear({})}</>}
                    title="No Recipes"
                />
            )}

            <PaginationComponent
                limit={limit}
                totalCount={searchQuery ? filteredRecipes.length : totalCount}
                onPageChange={(page) => fetchRecipes(page)}
            />
        </Container>
    );
};

export default RecipesList;
