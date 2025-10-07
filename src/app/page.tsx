"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Zap, Globe, Users, TrendingUp, Star, ChevronDown, Quote, Mail, Phone, MapPin, Wifi, Gamepad2, Monitor, Download, Upload, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              style={{ height: "100%" }}
            >
              <div className="h-full flex items-center">
                <Image
                  src="/logos/blue_logo.png"
                  alt="FibeX Logo"
                  fill={false}
                  width={120}
                  height={120}
                  priority
                />
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {["ABOUT", "SERVICES", "CONTACT"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-[#0052CC] transition-colors duration-200 font-heavy text-sm lg:text-base tracking-wide"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-gray-600 text-sm">?</span>
              </motion.div>
              <motion.div
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Users className="w-4 h-4 text-gray-600" />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-gray-600" />
              ) : (
                <Menu className="w-4 h-4 text-gray-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                {["ENGLISH", "LEARN", "DATA", "ABOUT"].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block text-gray-700 hover:text-[#0052CC] transition-colors duration-200 font-medium py-2"
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <motion.div
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-gray-600 text-sm">?</span>
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Users className="w-4 h-4 text-gray-600" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0">
          {/* Floating Gaming Assets - More Subtle */}
          <motion.div
            className="absolute top-32 left-16 opacity-10"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
        <Image
              src="/assets/1.png"
              alt="Gaming Asset"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-48 right-24 opacity-8"
            animate={{ 
              y: [0, 12, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Image
              src="/assets/2.png"
              alt="Gaming Asset"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-48 left-24 opacity-12"
            animate={{ 
              y: [0, -8, 0],
              x: [0, 6, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <Image
              src="/assets/3.png"
              alt="Gaming Asset"
              width={50}
              height={50}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 px-2 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:space-y-12"
            >
              <div className="space-y-8">
                <motion.h1
                  className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-[0.9] tracking-tight"
                  style={{ fontFamily: 'Origin Heavy' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  TRUE SPEED,{" "}
                  <br className="hidden sm:block" />
                  <span className="text-[#1A50FF]">TRUE CONNECTION</span>
                </motion.h1>
                
                <motion.p
                  className="text-xl sm:text-2xl text-gray-700 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Fast, transparent, and made for every Filipino household.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="bg-[#1A50FF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0F3FD9] transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(26, 80, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Connected
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-[#1A50FF] hover:text-[#1A50FF] transition-all duration-200 bg-white shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Plans
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Gaming Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                {/* Social Media Image */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Image
                    src="/assets/soc_med_hero.png"
                    alt="FibeX Social Media"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Bright Red Pricing Card */}
                <motion.div
                  className="absolute bottom-2 right-2 lg:bottom-[-50px] lg:-right-16 bg-[#FF0000] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl shadow-2xl border-2 border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="text-sm sm:text-base lg:text-xl font-bold mb-1" style={{ fontFamily: 'Origin Heavy' }}>
                    ₱1,299 / month
                  </div>
                  <div className="text-xs sm:text-xs lg:text-sm opacity-95 mb-1">
                    Unlimited data.
                  </div>
                  <div className="text-xs sm:text-xs lg:text-sm opacity-95">
                    Ideal for everyday gaming, streaming & WFH
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speed Test Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Assets */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-10 left-10 opacity-10"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/5.png"
              alt="Speed Test Asset"
              width={100}
              height={100}
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-20 right-20 opacity-15"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
        >
          <Image
              src="/assets/6.png"
              alt="Speed Test Asset"
              width={80}
              height={80}
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 left-20 opacity-12"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 15, 0]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
        >
          <Image
              src="/assets/7.png"
              alt="Speed Test Asset"
              width={90}
              height={90}
              className="w-18 h-18 md:w-26 md:h-26"
            />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Origin Heavy' }}>
              FIBEX SPEED TEST
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Test it. Don&apos;t take our word for it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Speed Chart */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Origin Heavy' }}>
                  Speed Performance
                </h3>
                
                {/* Horizontal Bar Chart */}
                <div className="space-y-2">
                  {[
                    { label: "0", color: "bg-[#F12400]", width: "w-2" },
                    { label: "5", color: "bg-[#F12400]", width: "w-4" },
                    { label: "10", color: "bg-[#F12400]", width: "w-6" },
                    { label: "50", color: "bg-[#F12400]", width: "w-12" },
                    { label: "100", color: "bg-[#F12400]", width: "w-16" },
                    { label: "250", color: "bg-[#F12400]", width: "w-20" },
                    { label: "500", color: "bg-[#0052CC]", width: "w-24" },
                    { label: "750", color: "bg-[#0052CC]", width: "w-28" },
                    { label: "1000", color: "bg-[#0052CC]", width: "w-32" }
                  ].map((bar) => (
                    <div key={bar.label} className="flex items-center space-x-4">
                      <div className="w-8 text-sm font-medium text-gray-600">{bar.label}</div>
                      <div className={`h-4 ${bar.width} ${bar.color} rounded-sm`}></div>
                    </div>
                  ))}
                </div>

                {/* Speed Display with Vertical Line */}
                <div className="text-center relative">
                  <div className="text-5xl font-bold text-[#0052CC] mb-2" style={{ fontFamily: 'Origin Heavy' }}>
                    263.01
                  </div>
                  <div className="text-lg text-gray-600 mb-4">MBPS</div>
                  {/* Vertical line extending upward */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-[#0052CC]"></div>
                </div>
              </div>

              {/* Right Side - Server Info */}
              <div className="space-y-6">
                {/* Local Server */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-6 h-6 bg-[#0052CC] rounded flex items-center justify-center">
                      <Wifi className="w-3 h-3 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-[#F12400]" style={{ fontFamily: 'Origin Heavy' }}>
                      LOCAL SERVER
                    </h4>
                  </div>
                  <div className="text-lg font-bold text-[#0052CC] mb-1">FIBEX</div>
                  <div className="text-sm text-gray-600">120.29.68.1</div>
                  <div className="mt-3 w-full h-px bg-[#0052CC]"></div>
                </div>

                {/* Main Server */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-6 h-6 bg-[#0052CC] rounded flex items-center justify-center">
                      <Globe className="w-3 h-3 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-[#F12400]" style={{ fontFamily: 'Origin Heavy' }}>
                      MAIN SERVER
                    </h4>
                  </div>
                  <div className="text-lg font-bold text-[#0052CC] mb-1">FIBEX TURBO INC.</div>
                  <div className="text-sm text-gray-600">TELABASTAGAN, SAN FERNANDO</div>
                  <div className="mt-3 w-full h-px bg-[#0052CC]"></div>
                </div>

                {/* Speed Results */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="w-8 h-8 bg-[#0052CC] rounded-full flex items-center justify-center mx-auto mb-2">
                      <Download className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs text-gray-600 mb-1">DOWNLOAD MBPS</div>
                    <div className="text-2xl font-bold text-[#0052CC]" style={{ fontFamily: 'Origin Heavy' }}>
                      263.01
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="w-8 h-8 bg-[#0052CC] rounded-full flex items-center justify-center mx-auto mb-2">
                      <Upload className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs text-gray-600 mb-1">UPLOAD MBPS</div>
                    <div className="text-2xl font-bold text-[#0052CC]" style={{ fontFamily: 'Origin Heavy' }}>
                      311.75
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 relative overflow-hidden">
        {/* Animated Background Assets */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-20 opacity-15"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 4, 0]
            }}
            transition={{ 
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/8.png"
              alt="Feature Asset"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-10 opacity-20"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Image
              src="/assets/9.png"
              alt="Feature Asset"
              width={100}
              height={100}
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-40 left-10 opacity-18"
            animate={{ 
              y: [0, -12, 0],
              x: [0, 8, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Image
              src="/assets/1.png"
              alt="Feature Asset"
              width={80}
              height={80}
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Origin Heavy' }}>
              Why Filipinos are switching to FibeX:
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with internet that delivers on its promises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gamepad2, title: "True Speed", description: "What we promise, you actually get." },
              { icon: Zap, title: "No Hidden Fees", description: "No lock-ins. No fine print. No runarounds." },
              { icon: Shield, title: "Real Service", description: "We actually pick up the phone." },
              { icon: Star, title: "For the People", description: "From barangays to condos - WiFi for all." }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0052CC] to-[#F12400] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background Assets */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-10 right-20 opacity-12"
            animate={{ 
              y: [0, -18, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/2.png"
              alt="Product Asset"
              width={110}
              height={110}
              className="w-22 h-22 md:w-30 md:h-30"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 left-20 opacity-15"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -4, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Image
              src="/assets/3.png"
              alt="Product Asset"
              width={90}
              height={90}
              className="w-18 h-18 md:w-26 md:h-26"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-40 left-10 opacity-10"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 12, 0]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          >
            <Image
              src="/assets/4.png"
              alt="Product Asset"
              width={100}
              height={100}
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Origin Heavy' }}>
              FibeX Internet Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pick what fits your lifestyle - nothing more, nothing less.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "Gaming Starter",
                description: "Perfect for casual gaming and streaming. Low latency, stable connection for everyday gaming.",
                features: ["Up to 100 Mbps", "Unlimited data", "Gaming-optimized routing", "24/7 support"]
              },
              {
                icon: Monitor,
                title: "Gaming Pro",
                description: "Ideal for competitive gaming and content creation. Ultra-low latency for esports.",
                features: ["Up to 500 Mbps", "Priority gaming traffic", "Static IP option", "Dedicated support"]
              },
              {
                icon: Zap,
                title: "Gaming Elite",
                description: "For professional gamers and streamers. Maximum performance for tournaments and streaming.",
                features: ["Up to 1000 Mbps", "Zero-lag guarantee", "Premium routing", "White-glove service"]
              }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0052CC] to-[#F12400] rounded-2xl flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
          </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast setup. Real people. No hassle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Plan",
                description: "Select the perfect internet plan for your needs. No hidden fees, just honest pricing.",
                icon: Users
              },
              {
                step: "02",
                title: "Schedule Installation",
                description: "Book a convenient time for our technicians to install your connection at home.",
                icon: Shield
              },
              {
                step: "03",
                title: "Get Connected",
                description: "Start enjoying reliable internet that brings you closer to opportunity and loved ones.",
                icon: TrendingUp
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#0052CC] to-[#F12400] transform translate-x-4"></div>
                )}
                <div className="w-20 h-20 bg-gradient-to-r from-[#0052CC] to-[#F12400] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-6xl font-bold text-gray-200 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#0052CC] to-[#F12400] relative overflow-hidden">
        {/* Animated Background Assets */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-20 opacity-20"
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/5.png"
              alt="Testimonial Asset"
              width={100}
              height={100}
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 opacity-25"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Image
              src="/assets/6.png"
              alt="Testimonial Asset"
              width={80}
              height={80}
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-10 opacity-15"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          >
            <Image
              src="/assets/7.png"
              alt="Testimonial Asset"
              width={90}
              height={90}
              className="w-18 h-18 md:w-26 md:h-26"
            />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of Filipino families and businesses who trust FibeX for honest, reliable internet service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex \"ProGamer\" Santos",
                role: "Professional Esports Player",
                content: "FibeX has been game-changing for my competitive gaming career. The zero-lag guarantee is real - I've never experienced such consistent performance. Finally, internet that delivers what it promises!",
                rating: 5
              },
              {
                name: "Maria \"StreamQueen\" Dela Cruz",
                role: "Content Creator & Streamer",
                content: "Perfect for streaming and gaming simultaneously. The upload speeds are incredible, and I never drop frames during my streams. My viewers always comment on how smooth my streams are now!",
                rating: 5
              },
              {
                name: "Juan \"LagKiller\" Rodriguez",
                role: "Competitive Gamer",
                content: "I've tried every ISP in the Philippines, and FibeX is the only one that actually delivers on their gaming promises. No more excuses for bad plays - my internet is finally not holding me back!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/50 mb-4" />
                <p className="text-white/90 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-200">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 bg-gray-50 relative overflow-hidden">
  
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-10 left-20 opacity-10"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/8.png"
              alt="Pricing Asset"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 opacity-15"
            animate={{ 
              y: [0, 18, 0],
              rotate: [0, -4, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Image
              src="/assets/9.png"
              alt="Pricing Asset"
              width={100}
              height={100}
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-10 opacity-12"
            animate={{ 
              y: [0, -12, 0],
              x: [0, 8, 0]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          >
            <Image
              src="/assets/1.png"
              alt="Pricing Asset"
              width={80}
              height={80}
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Gaming Starter",
                price: "₱999",
                period: "/month",
                description: "Perfect for casual gaming",
                features: ["Up to 100 Mbps", "Unlimited data", "Gaming-optimized", "24/7 support"],
                popular: false
              },
              {
                name: "Gaming Pro",
                price: "₱1,299",
                period: "/month",
                description: "Ideal for competitive gaming",
                features: ["Up to 500 Mbps", "Priority traffic", "Static IP", "Dedicated support", "Zero-lag guarantee"],
                popular: true
              },
              {
                name: "Gaming Elite",
                price: "₱2,499",
                period: "/month",
                description: "For professional gamers",
                features: ["Up to 1000 Mbps", "Premium routing", "White-glove service", "Tournament priority", "Custom optimization"],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 ${
                  plan.popular ? 'border-[#0052CC] scale-105' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="bg-[#0052CC] text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
          </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-[#0052CC] text-white hover:bg-[#1E40AF]'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-[#0052CC] hover:text-[#0052CC]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about FibeX.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Is Fibex available in my area?",
                answer: "Check your barangay or condo — we’re expanding fast."
              },
              {
                question: "Do I need to sign a contract?",
                answer: "Nope. You stay because you’re happy, not because you’re locked in."
              },
              {
                question: "What if my connection slows down?",
                answer: "Message us. We’ll fix it fast — and if we don’t, your next bill’s on us."
              },
              {
                question: "Are there hidden fees?",
                answer: "None. What you see is what you pay. Always."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0052CC] to-[#F12400] relative overflow-hidden">
        {/* Animated Background Assets */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-20 opacity-20"
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/2.png"
              alt="CTA Asset"
              width={100}
              height={100}
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 opacity-25"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Image
              src="/assets/3.png"
              alt="CTA Asset"
              width={80}
              height={80}
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-10 opacity-15"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          >
            <Image
              src="/assets/4.png"
              alt="CTA Asset"
              width={90}
              height={90}
              className="w-18 h-18 md:w-26 md:h-26"
            />
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Origin Heavy' }}>
              Fast, fair, and made for you.
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Switch to Fibex today.
            </p>
            <motion.button
              className="bg-white text-[#0052CC] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Connected Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We actually pick up the phone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0052CC] rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">support@fibex.ph</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0052CC] rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(02) 800-FIBEX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0052CC] rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Facebook Messenger</h4>
                    <p className="text-gray-600">@FibexPH</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <motion.button
                  className="w-full bg-[#0052CC] text-white py-3 rounded-xl font-semibold hover:bg-[#1E40AF] transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
          <Image
                  src="/logos/blue_logo.png"
                  alt="FibeX Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="text-3xl font-bold text-[#0052CC]" style={{ fontFamily: 'Origin Heavy' }}>FIBEX</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Fast, transparent, and made for every Filipino household.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <motion.div
                    key={social}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0052CC] transition-colors cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-sm font-semibold">{social[0]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Products</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Internet Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Speed Test</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coverage Areas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 FibeX. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}