"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left Side - Visual Panel */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] items-center justify-center p-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-[#00a5b4]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-[#00a5b4]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2,
            }}
          />

          {/* Geometric grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(#00a5b4 1px, transparent 1px), linear-gradient(90deg, #00a5b4 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/" className="inline-block mb-12">
              <Image
                src="/logo2.png"
                alt="T-YOU"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#4C4E53] mb-6 leading-tight">
              Welcome to the
              <br />
              <span className="text-[#00a5b4]">Future of Tech</span>
            </h1>

            <p className="text-[#767678] text-base lg:text-lg mb-12 leading-relaxed">
              Access powerful development tools and AI-driven solutions that
              transform how you build digital experiences.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4">
              {[
                { icon: Sparkles, text: "AI-Powered Development" },
                { icon: Shield, text: "Enterprise-Grade Security" },
                { icon: Zap, text: "Lightning Fast Performance" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 text-[#4C4E53]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00a5b4]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#00a5b4]" />
                  </div>
                  <span className="text-base">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 relative min-h-screen lg:min-h-0">
        {/* Mobile logo */}
        <motion.div
          className="lg:hidden absolute top-6 left-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="T-YOU"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </motion.div>

        <motion.div
          className="w-full max-w-md mt-16 lg:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Login Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xl">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4C4E53] mb-2">
                Sign In
              </h2>
              <p className="text-[#767678] text-sm sm:text-base">
                Enter your credentials to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label
                  htmlFor="email"
                  className="text-[#4C4E53] text-sm font-medium"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#767678] w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 sm:h-14 bg-gray-50 border-gray-200 text-[#4C4E53] placeholder:text-gray-400 focus:border-[#00a5b4] focus:ring-1 focus:ring-[#00a5b4] transition-all cursor-pointer rounded-xl"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label
                  htmlFor="password"
                  className="text-[#4C4E53] text-sm font-medium"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#767678] w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 h-12 sm:h-14 bg-gray-50 border-gray-200 text-[#4C4E53] placeholder:text-gray-400 focus:border-[#00a5b4] focus:ring-1 focus:ring-[#00a5b4] transition-all cursor-pointer rounded-xl"
                    required
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#767678] hover:text-[#00a5b4] transition-colors cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Remember & Forgot */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer accent-[#00a5b4] rounded"
                  />
                  <span className="text-sm text-[#767678] group-hover:text-[#4C4E53] transition-colors">
                    Remember me
                  </span>
                </label>
                <motion.a
                  href="#"
                  className="text-sm text-[#00a5b4] hover:text-[#00c5d4] transition-colors cursor-pointer font-medium"
                  whileHover={{ x: 2 }}
                >
                  Forgot password?
                </motion.a>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-12 sm:h-14 bg-[#00a5b4] text-white hover:bg-[#00c5d4] cursor-pointer transition-all text-sm sm:text-base font-semibold rounded-xl shadow-lg shadow-[#00a5b4]/20 flex items-center justify-center gap-2 group"
                  >
                    Sign in to your account
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-4 my-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-[#767678] font-medium">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </motion.div>

            {/* Social Login */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 sm:h-14 border-gray-200 bg-white hover:bg-gray-50 hover:border-[#00a5b4] text-[#4C4E53] cursor-pointer transition-all rounded-xl"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </motion.div>
            </motion.div>

            {/* Sign up link */}
            <motion.p
              className="text-center text-sm text-[#767678] mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Don't have an account?{" "}
              <motion.a
                href="#"
                className="text-[#00a5b4] hover:text-[#00c5d4] font-semibold cursor-pointer transition-colors"
                whileHover={{ x: 2 }}
              >
                Create account
              </motion.a>
            </motion.p>
          </div>

          {/* Back to home */}
          <motion.div
            className="text-center mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Link
              href="/"
              className="text-sm text-[#767678] hover:text-[#00a5b4] transition-colors cursor-pointer inline-flex items-center gap-2 group"
            >
              <motion.span className="group-hover:-translate-x-1 transition-transform">
                ←
              </motion.span>
              Back to home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
