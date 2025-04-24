import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Container, Row, Col, Badge, ListGroup, Button } from "react-bootstrap";
import { showErrorToast } from "../../../../utils/toast-utils";
import "./RecipeDetails.scss";
import { FaAngleLeft } from "react-icons/fa";
import { noImage } from "../../../../utils/utils";

const RecipeDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const recipe = location.state;

    const hasRedirected = useRef(false);

    useEffect(() => {
        if (!recipe && !hasRedirected.current) {
            hasRedirected.current = true;
            showErrorToast("No recipe data found. Please go back and select a recipe");
            navigate("/dashboard/recipes");
        }
    }, [recipe, navigate]);

    if (!recipe) return null;

    return (
        <Container className="recipe-details my-4">
            <div className="d-flex justify-content-end align-items-end mb-3">
                <Button className="btn-btn-secondary" onClick={() => navigate("/dashboard/recipes")}>
                    <>{FaAngleLeft({})}</> Back
                </Button>
            </div>
            <Row className="mb-4">
                <Col xs={12} md={4} className="text-center">
                    <img
                        src={recipe.image || noImage}
                        alt={recipe.name}
                        className="recipe-image img-fluid rounded-circle"
                    />
                </Col>
                <Col xs={12} md={8}>
                    <Row className="mb-3">
                        <Col md={6}><strong>Name</strong><div className="bold-text" style={{ fontSize: "1.0rem" }}>{recipe.name}</div></Col>
                        <Col md={6}><strong>Meal Type</strong>
                            <div>{recipe.mealType.map((m: string, i: number) => (
                                <Badge bg="info" className="me-1" key={i}>{m}</Badge>
                            ))}</div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}><strong>Tags</strong>
                            <div>{recipe.tags.map((tag: string, i: number) => (
                                <Badge bg="secondary" className="me-1" key={i}>{tag}</Badge>
                            ))}</div>
                        </Col>
                        <Col md={6}><strong>Rating</strong><div>{recipe.rating} ⭐ ({recipe.reviewCount} reviews)</div></Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}><strong>Prep Time</strong><div>{recipe.prepTimeMinutes} mins</div></Col>
                        <Col md={6}><strong>Cook Time</strong><div>{recipe.cookTimeMinutes} mins</div></Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}><strong>Calories/Serving</strong><div>{recipe.caloriesPerServing}</div></Col>
                        <Col md={6}><strong>Cuisine</strong><div>{recipe.cuisine}</div></Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h5>Ingredients</h5>
                    <ListGroup>
                        {recipe.ingredients.map((item: string, idx: number) => (
                            <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <h5>Instructions</h5>
                    <ol>
                        {recipe.instructions.map((step: string, idx: number) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeDetails;
