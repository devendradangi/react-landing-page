import React, { useMemo, useState } from "react";
import {
    FaAngleDoubleLeft,
    FaAngleLeft,
    FaAngleRight,
    FaAngleDoubleRight,
} from "react-icons/fa";

import "./PaginationComponent.scss";

type PaginationProps = {
    limit: number;
    totalCount: number;
    onPageChange: (page: number) => void;
};

const PaginationComponent: React.FC<PaginationProps> = ({
    limit,
    totalCount,
    onPageChange,
}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount, limit]);

    if (totalPages <= 1) return null;

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        onPageChange(page);
    };

    const getPageNumbers = (): number[] => {
        const pages: number[] = [];
        let start = Math.max(currentPage - 1, 1);
        let end = Math.min(start + 2, totalPages);

        if (end - start < 2) {
            start = Math.max(end - 2, 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="custom-pagination">
            <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
                <>{FaAngleDoubleLeft({})}</> First
            </button>

            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                <>{FaAngleLeft({})}</> Prev
            </button>

            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? "active" : ""}
                    onClick={() => goToPage(page)}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next <>{FaAngleRight({})}</>
            </button>

            <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
            >
                Last <>{FaAngleDoubleRight({})}</>
            </button>
        </div>
    );
};

export default PaginationComponent

