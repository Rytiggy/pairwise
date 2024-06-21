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
                requiresAuth: true,
            },
        },
        // {
        //     name: "pairwise",
        //     path: "/compare",
        //     component: () => import("../pages/pairwise.vue"),
        //     meta: {
        //         requiresAuth: false,
        //     },
        // },

        // {
        //     name: "create",
        //     path: "/create",
        //     component: () => import("../pages/create.vue"),
        //     meta: {
        //         requiresAuth: true,
        //     },
        // },
        {
            name: "ranking",
            path: "/rankings/:id",
            component: () => import("../pages/ranking.vue"),
            meta: {
                requiresAuth: false,
            },
        },
        {
            name: "editRanking",
            path: "/rankings/:id/edit",
            component: () => import("../pages/editRanking.vue"),
            meta: {
                requiresAuth: true,
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
