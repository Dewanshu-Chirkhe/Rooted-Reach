
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";

// Define schema for sign in form
const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

// Define schema for sign up form
const signUpSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type SignInFormValues = z.infer<typeof signInSchema>;
type SignUpFormValues = z.infer<typeof signUpSchema>;

const AuthPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("signin");
    const { signIn, signUp } = useAuth();
    const navigate = useNavigate();

    // Sign in form
    const signInForm = useForm<SignInFormValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Sign up form
    const signUpForm = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleSignIn = async (values: SignInFormValues) => {
        setIsLoading(true);
        try {
            await signIn(values.email, values.password);
            navigate("/");
        } catch (error) {
            console.error("Sign in error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = async (values: SignUpFormValues) => {
        setIsLoading(true);
        try {
            await signUp(values.username, values.email, values.password);
            navigate("/");
        } catch (error) {
            console.error("Sign up error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-sage/10 py-12">
            <div className="container-custom max-w-md mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center mb-6 text-deep_charcoal">
                        Welcome to Rooted Reach
                    </h1>

                    <Tabs defaultValue="signin" value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid grid-cols-2 mb-8">
                            <TabsTrigger value="signin" className="text-base">
                                Sign In
                            </TabsTrigger>
                            <TabsTrigger value="signup" className="text-base">
                                Sign Up
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="signin">
                            <Form {...signInForm}>
                                <form onSubmit={signInForm.handleSubmit(handleSignIn)} className="space-y-4">
                                    <FormField
                                        control={signInForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                        <Input 
                                                            placeholder="Enter your email" 
                                                            className="pl-10" 
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={signInForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                        <Input 
                                                            type="password" 
                                                            placeholder="Enter your password" 
                                                            className="pl-10" 
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button 
                                        type="submit" 
                                        className="w-full bg-terracotta hover:bg-terracotta/90"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Signing In...
                                            </>
                                        ) : (
                                            <>
                                                Sign In <ArrowRight className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </TabsContent>

                        <TabsContent value="signup">
                            <Form {...signUpForm}>
                                <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-4">
                                    <FormField
                                        control={signUpForm.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                        <Input 
                                                            placeholder="Choose a username" 
                                                            className="pl-10" 
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={signUpForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                        <Input 
                                                            placeholder="Enter your email" 
                                                            className="pl-10" 
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={signUpForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                        <Input 
                                                            type="password" 
                                                            placeholder="Create a password" 
                                                            className="pl-10" 
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={signUpForm.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                        <Input 
                                                            type="password" 
                                                            placeholder="Confirm your password" 
                                                            className="pl-10" 
                                                            {...field} 
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button 
                                        type="submit" 
                                        className="w-full bg-terracotta hover:bg-terracotta/90"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Signing Up...
                                            </>
                                        ) : (
                                            <>
                                                Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
