import test from "ava";
import { testCategoryConstructor } from "@konsumation/db-test";
import { Category } from "@konsumation/model";

test("Category constructor", t => testCategoryConstructor(t, Category));
