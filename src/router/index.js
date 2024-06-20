import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("../pages/home.vue"),
            meta: {
                requiresAuth: false,
            },
        },
        {
            name: "pairwise",
            path: "/:id",
            component: () => import("../pages/pairwise.vue"),
            meta: {
                requiresAuth: false,
            },
        },
        {
            name: "register",
            path: "/register",
            component: () => import("../pages/register.vue"),
            meta: {
                requiresAuth: false,
            },
        },
        {
            name: "authenticate",
            path: "/authenticate",
            component: () => import("../pages/authenticate.vue"),
            meta: {
                requiresAuth: false,
            },
            beforeEnter: () => {
                onAuthStateChanged(getAuth(), function (user) {
                    console.log({ user })
                    if (user.currentUser) {
                        return { name: "home" }
                    }
                });
            }
        },

        {
            name: "create",
            path: "/create",
            component: () => import("../pages/create.vue"),
            meta: {
                requiresAuth: true,
            },
        },
    ],
});

router.beforeEach(async (to) => {
    // Check if the user is logged in
    if (to.meta.requiresAuth) {
        const auth = getAuth();
        const user = auth.currentUser;
        console.log("router.beforeEach", { user })

        if (!user) {
            return { name: "authenticate" };
        }
    }
});

export default router;
