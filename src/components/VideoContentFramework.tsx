'use client'

import { useState, useEffect } from 'react'

interface VideoContent {
  id: string
  title: string
  description: string
  duration: string
  category: 'educational' | 'testimonial' | 'process' | 'local'
  county: string
  language: 'english' | 'spanish' | 'bilingual'
  thumbnail: string
  videoUrl: string
  transcript: string
  tags: string[]
}

interface VideoContentFrameworkProps {
  county: string
  category?: string
  language?: 'english' | 'spanish' | 'bilingual'
}

const videoContent: VideoContent[] = [
  {
    id: 'health-insurance-basics-en',
    title: 'Health Insurance Basics: What Every Miami-Dade Resident Should Know',
    description: 'Learn the fundamentals of health insurance, including deductibles, copays, networks, and how to choose the right plan for your family.',
    duration: '8:45',
    category: 'educational',
    county: 'Miami-Dade County',
    language: 'english',
    thumbnail: '/videos/thumbnails/health-insurance-basics.jpg',
    videoUrl: '/videos/health-insurance-basics-miami.mp4',
    transcript: 'Complete transcript available for accessibility...',
    tags: ['health insurance', 'basics', 'miami-dade', 'education']
  },
  {
    id: 'seguro-salud-basico-es',
    title: 'Seguro de Salud Básico: Lo Que Todo Residente de Miami-Dade Debe Saber',
    description: 'Aprenda los fundamentos del seguro de salud, incluyendo deducibles, copagos, redes y cómo elegir el plan correcto para su familia.',
    duration: '9:20',
    category: 'educational',
    county: 'Miami-Dade County',
    language: 'spanish',
    thumbnail: '/videos/thumbnails/seguro-salud-basico.jpg',
    videoUrl: '/videos/seguro-salud-basico-miami.mp4',
    transcript: 'Transcripción completa disponible para accesibilidad...',
    tags: ['seguro de salud', 'básico', 'miami-dade', 'educación']
  },
  {
    id: 'maria-testimonial',
    title: 'Maria\'s Story: From Uninsured to Protected in Hialeah',
    description: 'Watch Maria Rodriguez share how she found affordable health insurance for her family working in Miami\'s restaurant industry.',
    duration: '3:30',
    category: 'testimonial',
    county: 'Miami-Dade County',
    language: 'bilingual',
    thumbnail: '/videos/thumbnails/maria-testimonial.jpg',
    videoUrl: '/videos/maria-rodriguez-testimonial.mp4',
    transcript: 'Maria Rodriguez testimonial transcript...',
    tags: ['testimonial', 'hispanic', 'restaurant worker', 'success story']
  },
  {
    id: 'enrollment-process',
    title: 'How to Enroll: Step-by-Step Healthcare.gov Guide for Miami-Dade',
    description: 'Follow along as we walk through the complete enrollment process, from creating your account to selecting your plan.',
    duration: '12:15',
    category: 'process',
    county: 'Miami-Dade County',
    language: 'english',
    thumbnail: '/videos/thumbnails/enrollment-process.jpg',
    videoUrl: '/videos/enrollment-process-guide.mp4',
    transcript: 'Step-by-step enrollment guide transcript...',
    tags: ['enrollment', 'healthcare.gov', 'how-to', 'guide']
  },
  {
    id: 'miami-hospitals-network',
    title: 'Your Health Network: Miami-Dade Hospitals and Providers',
    description: 'Explore the major hospital systems and healthcare providers available through Marketplace plans in Miami-Dade County.',
    duration: '6:45',
    category: 'local',
    county: 'Miami-Dade County',
    language: 'english',
    thumbnail: '/videos/thumbnails/miami-hospitals.jpg',
    videoUrl: '/videos/miami-hospitals-network.mp4',
    transcript: 'Miami hospital network overview transcript...',
    tags: ['hospitals', 'providers', 'network', 'miami-dade']
  }
]

export default function VideoContentFramework({ 
  county, 
  category, 
  language = 'english' 
}: VideoContentFrameworkProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null)
  const [filteredVideos, setFilteredVideos] = useState<VideoContent[]>([])
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    let filtered = videoContent.filter(video => 
      video.county === county || video.county === 'All Counties'
    )

    if (category) {
      filtered = filtered.filter(video => video.category === category)
    }

    if (language !== 'english') {
      filtered = filtered.filter(video => 
        video.language === language || video.language === 'bilingual'
      )
    }

    setFilteredVideos(filtered)
    if (filtered.length > 0 && !selectedVideo) {
      setSelectedVideo(filtered[0])
    }
  }, [county, category, language, selectedVideo])

  const handleVideoSelect = (video: VideoContent) => {
    setSelectedVideo(video)
    setIsPlaying(false)
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'video_selected', {
        event_category: 'Video Content',
        event_label: video.title,
        custom_parameter_1: county,
        custom_parameter_2: video.category
      })
    }
  }

  const handlePlayVideo = () => {
    setIsPlaying(true)
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'video_play', {
        event_category: 'Video Engagement',
        event_label: selectedVideo?.title,
        custom_parameter_1: county,
        video_duration: selectedVideo?.duration
      })
    }
  }

  const categoryLabels = {
    educational: '📚 Educational',
    testimonial: '💬 Success Stories',
    process: '📋 How-To Guides',
    local: '🏥 Local Resources'
  }

  if (!selectedVideo) return null

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Health Insurance Video Resources for {county}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about health insurance through our educational videos, success stories, and step-by-step guides.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900">
                {!isPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="relative cursor-pointer group"
                      onClick={handlePlayVideo}
                    >
                      <img 
                        src={selectedVideo.thumbnail} 
                        alt={selectedVideo.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iMzYwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjMyMCIgY3k9IjE4MCIgcj0iNDAiIGZpbGw9IiNmZmYiLz4KPHBhdGggZD0ibTMzMCAxNjUgMjAgMTUtMjAgMTVaIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNzAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSIgZm9udC1zaXplPSIxOCI+VmlkZW8gQ29udGVudDwvdGV4dD4KPHN2Zz4K'
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                        <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-blue-600 border-t-transparent border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full"
                    onError={() => {
                      console.log('Video playback error')
                      setIsPlaying(false)
                    }}
                  >
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                    <p className="text-white p-4">Your browser doesn't support video playback.</p>
                  </video>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-3">
                    {categoryLabels[selectedVideo.category]}
                  </span>
                  <span className="text-sm text-gray-500">{selectedVideo.duration}</span>
                  {selectedVideo.language === 'spanish' && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                      🇪🇸 Español
                    </span>
                  )}
                  {selectedVideo.language === 'bilingual' && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded text-xs bg-purple-100 text-purple-800">
                      🌍 Bilingual
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedVideo.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedVideo.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Transcript Toggle */}
            <div className="mt-6 bg-white rounded-lg shadow-md">
              <details className="p-6">
                <summary className="font-semibold text-gray-800 cursor-pointer hover:text-blue-600">
                  📄 View Full Transcript
                </summary>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedVideo.transcript}
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Video Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">More Videos</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(categoryLabels).map(([cat, label]) => (
                    <button
                      key={cat}
                      onClick={() => {
                        const categoryVideos = videoContent.filter(v => v.category === cat && v.county === county)
                        if (categoryVideos.length > 0) {
                          setSelectedVideo(categoryVideos[0])
                        }
                      }}
                      className={`text-xs p-2 rounded-lg transition-colors ${
                        selectedVideo.category === cat 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Video List */}
              <div className="space-y-4">
                {filteredVideos.map((video) => (
                  <div 
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`cursor-pointer rounded-lg p-4 transition-colors ${
                      selectedVideo.id === video.id 
                        ? 'bg-blue-50 border-2 border-blue-200' 
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-8 bg-gray-300 rounded flex items-center justify-center">
                          <span className="text-xs">▶</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {video.duration}
                        </p>
                        <div className="flex items-center mt-1">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            video.category === 'educational' ? 'bg-blue-100 text-blue-800' :
                            video.category === 'testimonial' ? 'bg-green-100 text-green-800' :
                            video.category === 'process' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {categoryLabels[video.category]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-center">
                <h4 className="font-bold text-white mb-2">Need Personal Help?</h4>
                <p className="text-blue-100 text-sm mb-3">
                  Speak with a licensed agent about your specific situation
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                  📞 Call (331) 343-2584
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Series Navigation */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Complete {county} Health Insurance Video Series
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(categoryLabels).map(([cat, label]) => {
              const categoryCount = videoContent.filter(v => v.category === cat && v.county === county).length
              return (
                <div key={cat} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl mb-2">{categoryCount}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}