import React, { useEffect, useState } from 'react'
import { Box, Typography, Avatar, Grid, Paper, Chip, CircularProgress, ThemeProvider, createTheme } from '@mui/material'
import { GitHub, Star, CallSplit, People, EmojiEvents, Code, Language, LocationOn, Link as LinkIcon, CalendarToday, Work } from '@mui/icons-material'

// Create a theme instance
const theme = createTheme()

const StyledPaper = ({ children, ...props }) => (
  <Paper
    elevation={2}
    sx={{
      p: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 3,
      },
    }}
    {...props}
  >
    {children}
  </Paper>
)

const StatBox = ({ icon, value, label }) => (
  <Grid item xs={6} sm={4} md={3}>
    <StyledPaper>
      {React.cloneElement(icon, { fontSize: 'large', color: 'primary', style: { marginBottom: '8px' } })}
      <Typography variant="h6" component="div">
        {value ?? 'N/A'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </StyledPaper>
  </Grid>
)

const InfoChip = ({ icon, label }) => (
  <Chip
    icon={icon}
    label={label}
    variant="outlined"
    sx={{ m: 0.5 }}
  />
)

export default function GitHubProfile() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProfileAndRepos = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch('https://api.github.com/users/Akashmishra1209'),
          fetch('https://api.github.com/users/Akashmishra1209/repos?sort=updated&per_page=5')
        ])

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error(`HTTP error! status: ${profileResponse.status}, ${reposResponse.status}`)
        }

        const [profileData, reposData] = await Promise.all([
          profileResponse.json(),
          reposResponse.json()
        ])

        setProfile(profileData)
        setRepos(reposData)
      } catch (e) {
        console.error('Error fetching GitHub data:', e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProfileAndRepos()
  }, [])

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">Error: {error}</Typography>
      </Box>
    )
  }

  if (!profile) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6">No profile data available</Typography>
      </Box>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 3, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar
            src={profile.avatar_url}
            alt={profile.name || profile.login}
            sx={{ width: 100, height: 100, mr: 3, mb: { xs: 2, sm: 0 } }}
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {profile.name || profile.login}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              @{profile.login}
            </Typography>
            {profile.bio && (
              <Typography variant="body1" paragraph>
                {profile.bio}
              </Typography>
            )}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {profile.company && <InfoChip icon={<Work />} label={profile.company} />}
              {profile.location && <InfoChip icon={<LocationOn />} label={profile.location} />}
              {profile.blog && <InfoChip icon={<LinkIcon />} label={profile.blog} />}
              <InfoChip icon={<CalendarToday />} label={`Joined ${profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}`} />
              <InfoChip
                icon={<GitHub />}
                label={
                  <a
                    href='https://github.com/Akashmishra1209/'
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                   View Github
                  </a>
                }
              />

            </Box>
          </Box>
        </Paper>
        <Grid container spacing={3}>
          <StatBox icon={<People />} value={profile.followers} label="Followers" />
          <StatBox icon={<People />} value={profile.following} label="Following" />
          <StatBox icon={<GitHub />} value={profile.public_repos} label="Repositories" />
          <StatBox icon={<Star />} value={profile.public_gists} label="Gists" />
          <StatBox icon={<CallSplit />} value={profile.public_repos} label="Pull Requests" />
          <StatBox icon={<Star />} value={repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)} label="Total Stars" />
          <StatBox icon={<Code />} value={profile.contributions || 'N/A'} label="Contributions" />
          <StatBox icon={<GitHub />} value={profile.open_issues || 'N/A'} label="Issues Opened" />
          <StatBox icon={<Star />} value={profile.watchers_count || 'N/A'} label="Watchers" />
          <StatBox icon={<EmojiEvents />} value={profile.public_repos} label="Achievements" />
          <StatBox icon={<Code />} value={repos.reduce((sum, repo) => sum + repo.size, 0)} label="Total Code Size (KB)" />
          <StatBox icon={<Code />} value={Object.keys(repos.reduce((langs, repo) => {
            if (repo.language) langs[repo.language] = true;
            return langs;
          }, {})).join(', ') || 'N/A'} label="Languages Used" />
        </Grid>

        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            Recent Repositories
          </Typography>
          <Grid container spacing={2}>
            {repos.map((repo) => (
              <Grid item xs={12} sm={6} md={4} key={repo.id}>
                <StyledPaper>
                  <Typography variant="subtitle1" gutterBottom>
                    {repo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {repo.description || 'No description available'}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Chip icon={<Star />} label={repo.stargazers_count} size="small" />
                    <Chip icon={<CallSplit />} label={repo.forks_count} size="small" />
                    <Chip icon={<Language />} label={repo.language || 'N/A'} size="small" />
                  </Box>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}