import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = createRouteMatcher([
  "/", "/cart", "/all-products", "/product/(.*)"
]);

const authRoutes = createRouteMatcher([
  "/my-orders", "/order-placed", "/add-address"
]);

const sellerRoutes = createRouteMatcher([
  "/seller(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // 1. Public routes – allow anyone
  if (publicRoutes(req)) {
    return;
  }

  // 2. Routes for any signed-in user
  if (authRoutes(req)) {
    if (!userId) return redirectToSignIn({ returnBackUrl: req.url });
    return;
  }

  // 3. Seller-only routes
  if (sellerRoutes(req)) {
    // Ensure signed in
    if (!userId) return redirectToSignIn({ returnBackUrl: req.url });

    const role = sessionClaims?.metadata?.role;
    if (role !== "seller") {
      return new Response("Forbidden", { status: 403 });
    }
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};