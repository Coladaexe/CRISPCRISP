"use server";
 
import { NextResponse } from "next/server";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
 
export async function POST(req: Request) {
  // Get body request
  const body = await req.json();
  const { user, oeuvre1 } = body;
 
  // Call register function (see below)
  const response = await register( user, oeuvre1);
 
  // If response is false
  if (response == false) {
    // Return an appropriate error message
    return NextResponse.json(
      { message: "User already exists" },
      { status: 403 }
    );
  }
 
  return NextResponse.json({ response });
}
 
async function register(
    user: string,
    oeuvre1: string,
  
) {
  let db = null;
 
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: process.env.DATABASE_NAME || "", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }
 
  // Verify that the user does not exist yet

 
  // Insert the new user
  const sql = `INSERT INTO users (user, oeuvre1) VALUES (?, ?, ?, ?)`;
  const insert = await db.get(sql, user, oeuvre1);
 
  return insert;
}