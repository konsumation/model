import test from "ava";
import { testNoteConstructor } from "@konsumation/db-test";
import { Note } from "@konsumation/model";

test("Note constructor", t => testNoteConstructor(t, Note));
